import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersModel} from '../../models/UsersModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: UsersModel[];
  userOnClick: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.users = this.activatedRoute.snapshot.data.allUsers;
  }

  ngOnInit(): void {
  }

  catchUserData(user: any) {
    this.userOnClick = user;
  }
}
