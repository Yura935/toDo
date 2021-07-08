import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUp } from '../interfaces/signUp.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(user: ISignUp) {
    return this.http.post("https://jsonplaceholder.typicode.com/users", user);
  }

}
