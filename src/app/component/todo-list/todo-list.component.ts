import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 // public  todos: string[] = ['do homework', 'wash dishes', 'clean car']


  constructor() { }

  ngOnInit(): void {
    this.todo = ['do homework', 'wash dishes', 'clean car'];
  }

  public handleClick: any;

}
