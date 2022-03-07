import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { EstadoPipe } from '../estado.pipe';

@NgModule({
  declarations: [
    TaskComponent,
    EstadoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskModule { }
