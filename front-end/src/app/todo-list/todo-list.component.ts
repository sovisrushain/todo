import { Component } from '@angular/core';
import {ToDo} from "../model/ToDo";
import {TodoDataService} from "../service/data/todo-data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: ToDo[] = []

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todoService.fetchAllTodos('admin').subscribe(
      res => {
        this.todoList = res
      }
    )
  }
}
