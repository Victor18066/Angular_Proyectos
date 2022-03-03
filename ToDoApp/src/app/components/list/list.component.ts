import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../model/task_interface';

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

  removeTask(event: any){
    if(event > -1)
    this.taskList.splice(event,1);
  }

  

  

  
}
