import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task_interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  public taskList : Task [] =[];

  ngOnInit(): void {
  }

  

  

  
}
