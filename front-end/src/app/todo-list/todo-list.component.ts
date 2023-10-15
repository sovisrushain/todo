import { Component } from '@angular/core';
import {ToDo} from "../model/ToDo";
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: ToDo[] = []

  constructor(private todoService: TodoDataService,
              private router: Router) { }

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
      res => this.fetchAllTodos()
    )
  }

  updateToDo(id: number) {
    let filteredTodo = this.todoList.filter(todo => todo.id == id);
    console.log(filteredTodo)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos/save'])
  }
}
