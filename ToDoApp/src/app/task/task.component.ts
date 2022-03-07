import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task_interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  data: Task = {
    id: -1,
    title: '',
    description: '',
    estado: 1 //
  };

  @Input()
  i:number = 0; //ya no se usa para el delete

  @Output()
  delete: EventEmitter<number> = new EventEmitter(); //Task // number

  @Output()
  change: EventEmitter<number> = new EventEmitter(); //Task

  verBoton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(indice: number){  //data: Task // indice:number
    this.delete.emit(indice); //data // indice
  }

  changeEstado(ind: number){  
    this.change.emit(ind);
  }

  borraBoton(){
    this.verBoton = true;
  }


}
