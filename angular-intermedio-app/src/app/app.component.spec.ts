import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo'
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoService } from './todo.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
    FormsModule
    ],
    declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent
    ],
    providers: [TodoService]
    });
    });   

    it(`should have a todo list `, async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app.todos instanceof Array).toBeTruthy()
      }));

    it('should create the app', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
      }));
      /*
      it(`should have a newTodo todo`, async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app.newTodo instanceof Todo).toBeTruthy()
      })); */

      it('should display "Todos" in h1 tag', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Todo');
      }));
     });