import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'] // Corrected property name
})
export class TodosComponent implements OnInit {
    localItem: string | null = null;
    todos: Todo[] = [];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.localItem = localStorage.getItem("todos");
        this.todos = this.localItem ? JSON.parse(this.localItem) : [];
      }
    }

    addTodo(todo: Todo): void {
      console.log(todo);
      this.todos.push(todo);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }

    deleteTodo(todo: Todo): void {
      console.log(todo);
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      }
    }
}
