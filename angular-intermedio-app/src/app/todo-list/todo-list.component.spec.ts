import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      TodoListComponent,
      TodoListItemComponent ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    let todo = new Todo({
    title: "hola",
    complete: false
    });
    component.todos.push(todo);
    fixture.detectChanges();
    });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
