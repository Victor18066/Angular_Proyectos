import { Component, OnInit, Output } from '@angular/core';
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

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  public task! : Task;

  toDoForm = this.fb.group({
    title: [''],
    description: [''],
  });

  addTask(){
    //this.taskList.push(new Task());
    
  }

}
