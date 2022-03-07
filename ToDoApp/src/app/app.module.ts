import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { ListModule } from './list/list.module';
import { CreateTaskModule } from './create-task/create-task.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
   AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,

    CreateTaskModule,
    TaskModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
