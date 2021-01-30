import { Component, OnInit } from '@angular/core';
import EventEmitter = require('events');

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input() item: string;
  @Output() onChange = new EventEmitter();

  public buttonClicked(): void {
   this.onChange.emit();
  }


}
