import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task_interface';

import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  title: string = '';
  description: string = '';
  estado: number = 2;

  private generateId: number = 0;

  //id: number = 1;

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  /*task: Task = {
    id: -1,
    title: '',
    description: '',
    estado: 1 //
  }; */

  taskList: Task[] = [];

  addTask(){
    this.generateId++;
    let taskT: Task = { // task local
      id: -1,
      title: '',
      description: '',
      estado: 1 //
    };
    taskT.id = this.generateId; // no this
    taskT.title = this.title;
    taskT.description = this.description;
    taskT.estado = this.estado;
    this.add.emit(taskT); 

    this.taskList.push(taskT);
    console.log(this.taskList);

    return false; // para que el evento no se propague, no salga el title y la description en la url y se buguee
  }
  
}
