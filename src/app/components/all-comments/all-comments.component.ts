import {Component, OnInit} from '@angular/core';
import {UsersModel} from '../../models/UsersModel';
import {ActivatedRoute} from '@angular/router';
import {CommentsModel} from '../../models/CommentsModel';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: CommentsModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.comments = this.activatedRoute.snapshot.data.allComments;
  }

  ngOnInit(): void {
  }

}
