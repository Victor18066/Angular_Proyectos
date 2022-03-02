import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Todo} from '../todo';
import { TodoListItemComponent } from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    component.todo = new Todo({
    title: 'Todo Test',
    complete: false
    });
    fixture.detectChanges();
   });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
