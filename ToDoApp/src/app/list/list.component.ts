import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task_interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input()
  taskList : Task [] = [];

  ngOnInit(): void {
  }

  handleRemoveTask(event: number){ //event: Task // number
    if(event > -1)
    this.taskList.splice(event,1); //.id
    //this.taskList = this.taskList.filter((task: Task) => task.id !== event.id);
  }

  handleChangeEstado(event: number){ 
    if(event > -1)
    this.taskList[event].estado = 1;
  }

}
