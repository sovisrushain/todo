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
}
