import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDo} from "../../model/ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  fetchAllTodos(username: string) {
    return this.http.get<ToDo[]>(`http://localhost:8082/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`http://localhost:8082/users/${username}/todos/${id}`)
  }

  findTodoById(username: string, id: number) {
    return this.http.get<ToDo>(`http://localhost:8082/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo: ToDo) {
    return this.http.put(`http://localhost:8082/users/${username}/todos/${id}`, todo)
  }

  saveTodo(username: string, description: string) {
    return this.http.post(`http://localhost:8082/users/${username}/todos/${description}`, null)
  }

  // createBasicAuthHeader() {
  //   let username = 'admin'
  //   let password = 'root'
  //   let basicAuthString = 'Basic' + window.btoa(username + ':' + password)
  //   return basicAuthString
  // }
}
