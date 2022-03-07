import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from './model/task_interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  taskList: Task[] = [];

  handleApp(add:Task){
    this.taskList.push(add);
  }

}
