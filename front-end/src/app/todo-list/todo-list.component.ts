import { Component } from '@angular/core';
import {ToDo} from "../model/ToDo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList = [
    new ToDo(1, 'Learn Angular', false, this.dateFormatter()),
    new ToDo(2, 'Implement todo app backend', false, this.dateFormatter()),
    new ToDo(3, 'Implement todo app frontend', false, this.dateFormatter())
  ]

  dateFormatter() {
    return new Date().toLocaleDateString().replaceAll("/", "-")
  }
}
