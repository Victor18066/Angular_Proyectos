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

  private generateId: number = 0;

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  task: Task = {
    id: -1,
    title: '',
    description: ''
  };

  taskList: Task[] = [];

  addTask(){
    this.generateId++;
    this.task.id = this.generateId;
    this.task.title = this.title;
    this.task.description = this.description;
    this.add.emit(this.task);
  }

}
