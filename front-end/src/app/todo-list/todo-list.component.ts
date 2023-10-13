import { Component } from '@angular/core';
import {ToDo} from "../model/ToDo";
import {TodoDataService} from "../service/data/todo-data.service";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: ToDo[] = []

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
      this.fetchAllTodos()
  }

  fetchAllTodos() {
    this.todoService.fetchAllTodos('admin').subscribe(
      res => this.todoList = res
    )
  }

  deleteToDo(id: number) {
    this.todoService.deleteTodo('admin', id).subscribe(
      res => {
        this.fetchAllTodos()
      }
    )
  }
}
