import { Component } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {ToDo} from "../model/ToDo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  id = 0
  todo = new ToDo(this.id, '', '', '', false)

  constructor(private router: Router,
              private todoService: TodoDataService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id != 0) {
      this.todoService.findTodoById('admin', this.id).subscribe(
        data => this.todo = data,
        error => console.log(error.message)
      )
    }
  }

  saveTodo() {
    if (this.id == 0) {
      console.log(this.todo)
      this.todoService.saveTodo('admin', this.todo).subscribe(
        res => this.fetchAllAndNavigate()
      )
    } else {
      this.todoService.updateTodo('admin', this.id, this.todo).subscribe(
        res => this.fetchAllAndNavigate()
      )
    }
  }

  fetchAllAndNavigate() {
    this.todoService.fetchAllTodos('admin').subscribe(
      res => this.router.navigate(['todos'])
    )
  }
}
