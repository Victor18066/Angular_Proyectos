import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task_interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public taskList : Task [] =[];

  i:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(indice:number){ 
    if(indice > -1){
      this.taskList.splice(indice,1);
    }
  }

  deleteHandler(task: Task): void { //
    task.id;
  }

}
