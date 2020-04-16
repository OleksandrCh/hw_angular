import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersModel} from '../../models/UsersModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input()
  user: UsersModel;

  @Output()
  forwardUserData = new EventEmitter();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  navigateUser(user: UsersModel) {
    this.forwardUserData.emit(user);

    this.router.navigate([user.id, 'posts'], {
      state: {user},
      queryParams: {idOfUser: user.id},
      relativeTo: this.activatedRoute,
    });
  }

}
