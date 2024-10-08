import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
    @Input() todo!: Todo;

    onClick(todo: Todo){
      console.log("delete button triggered");
      this.todoDelete.emit(todo);
    }
    @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
}
