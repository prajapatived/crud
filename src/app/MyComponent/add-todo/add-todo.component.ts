import { Component, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title : string='';
  desc : string='';

  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();

  constructor(){

  }

  ngOnInit():void{

  }
  onSubmit(){
    const todo={
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title="";
    this.desc="";

  }

}
