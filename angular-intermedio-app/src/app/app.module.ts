import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';  // NO HttpClient aquí

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoService } from './todo.service';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoComponent } from './todo/todo.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { LoggedInGuard } from './logged-in.guard';

/* used to create fake backend // DEPRECATED
import { fakeBackendProvider } from '../shared/fake-backend/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http'; */

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: ':status', component: TodoComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '/login' }
];

//export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    TodoService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
