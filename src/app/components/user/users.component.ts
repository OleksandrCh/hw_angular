import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from '../../models/UsersModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input()
  user: UsersModel;

  constructor() {
  }


}
