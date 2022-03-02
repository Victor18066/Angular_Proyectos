import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

// ng e2e -> NO VA

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

 // providers: [TodoService]
})
export class AppComponent {

  title:string = 'angular-intermedio-app'
  
  // No longer needed, now handled by TodoListHeaderComponent
  // newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  todos: Todo[] = [];

  ngOnInit():void {
    this.getTodos; //
  }
  
  // No longer needed, now handled by TodoListHeaderComponent
  // addTodo() {
  // this.todoService.addTodo(this.newTodo);
  // this.newTodo = new Todo();
  // }
  // Add new method to handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo) { //
    this.todoService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: { id: number; }) { //
    this.todoService.deleteTodoById(todo.id);
  }

  /*get todos() {
    return this.todoService.getAllTodos();
  } */

  getTodos(){
    this.todoService.getAllTodos().then(todos => this.todos = todos);
  }
}

//borrar ?
