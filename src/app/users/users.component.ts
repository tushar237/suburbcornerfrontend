import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];
  public user;
  constructor(private restService : RestService) {}

  ngOnInit() {
  }

  getUsers(event) {
    this.restService.getUsers().subscribe((data) => {
      //this.users = Array.from(Object.keys(data), k=> data[k]);
      this.users = Array.from(Object.values(data));
      console.log(Object.values(this.users[4])[0]);
    });
  }

  getUser(event) {
    this.restService.getUser().subscribe((data) => {
    this.user = Array.from(Object.values(data));
      console.log(Array.from(Object.values(this.user[0]))[0]);
    });
  }

}
