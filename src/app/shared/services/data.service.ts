import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToDo } from '../interfaces/toDo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllToDo() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  addToDo(obj: IToDo) {
    return this.http.post("https://jsonplaceholder.typicode.com/todos", obj);
  }

  updateToDo(id: number, obj: IToDo) {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, obj);
  }

  deleteToDo(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
