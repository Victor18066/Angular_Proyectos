import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task_interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public taskList : Task [] =[];

  addTask(){
    //this.taskList.push(new Task());
    this.taskList.push({
      id: Date.now(),
      title: 'Mi primera tarea',
      description: 'aaaaaaaa'
    })
  }

}
