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
      this.users = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.users);
    });
  }

  getUser(event) {
    this.user = this.restService.getUser();
  }

}
