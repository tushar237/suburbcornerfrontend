import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private usersApiUrl = "https://reqres.in/api/users?page=2";
  private userApiUrl = "https://reqres.in/api/users/2";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.usersApiUrl);
  }

  getUser() {
    return this.http.get(this.userApiUrl);
  }
}
