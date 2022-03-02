import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  constructor() { }

  @Output()
  clear: EventEmitter<Todo> = new EventEmitter();

  @Input()
  path: string = 'all';

  @Input()
  todos: Todo[] = [];

  @Input()
  activeTasks: number = 0;  

  ngOnInit(): void {
  }

  clearCompleted() {
    this.clear.emit();
   }

}
