import { Component } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {ToDo} from "../model/ToDo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {

  id = 0
  todo = new ToDo(this.id, '', '', false)

  constructor(private router: Router,
              private todoService: TodoDataService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id != 0) {
      this.todoService.findTodoById('admin', this.id).subscribe(
        res => res = this.todo
      )
    }
  }

  editTodo() {
      this.todoService.updateTodo('admin', this.id, this.todo).subscribe(
        res => {
          this.todoService.fetchAllTodos('admin').subscribe(
            res => this.router.navigate(['todos'])
          )
        }
      )
    }
}
