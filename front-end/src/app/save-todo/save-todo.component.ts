import { Component } from '@angular/core';
import {ToDo} from "../model/ToDo";
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.css']
})
export class SaveTodoComponent {

  description = ""

  constructor(private router: Router,
              private todoService: TodoDataService) {
  }

  saveTodo() {
    this.todoService.saveTodo('admin', this.description).subscribe(
      res => {
        this.todoService.fetchAllTodos('admin').subscribe(
          res => this.router.navigate(['todos'])
        )
      }
    )
  }
}
