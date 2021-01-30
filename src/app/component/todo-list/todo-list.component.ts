import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public  todos: string[];

  constructor() { }

  ngOnInit(): void {
    this.todos = ['do homework', 'wash dishes', 'clean car'];
  }


  public handleClick(): void {
    console.log('handleClick()');
  }
}
