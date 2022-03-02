import { Injectable } from '@angular/core';
import { Todo } from './todo';

import { HttpClient, HttpClientModule} from '@angular/common/http'; //
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  [x: string]: any;
  // Placeholder for last id to simulate automatic incrementing of id's
  lastId: number = 0;
  // Placeholder for todo's
  todos: Todo[] = [];

  private apiUrl = '/api'; // URL to web api

  constructor(private http:HttpClient) { } //

  // Simulate POST /todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
    .filter(todo => todo.id !== id);
    return this;
  }
  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo | null{
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  /* Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  } */

  getAllTodos(): Promise<Todo[]> {
    return this.http.get(this.apiUrl+'/todos')
      .toPromise()
      .then(response => response as Todo[]) //no hace falta el response.json()
      //.catch(this.handleError);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo | undefined{
      return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }
  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo!; // forzar que no sea null
  }

  deleteCompleted(): Promise<Object> {
    return this.http.delete(this.apiUrl+'/todos/clear-completed')
    .toPromise()
    .then(response => response as Todo)
    //.catch(this.handleError);
   }
 
 
}
