import {Component, Input, OnInit} from '@angular/core';
import {CommentsModel} from '../../models/CommentsModel';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
  @Input()
  comment: CommentsModel;
  constructor() {
  }

}
