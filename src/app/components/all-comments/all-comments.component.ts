import {Component, OnInit} from '@angular/core';
import {UsersModel} from '../../models/UsersModel';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentsModel} from '../../models/CommentsModel';
import {CommentsService} from '../../service/comments.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: CommentsModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private commentsService: CommentsService) {
    // this.comments = this.activatedRoute.snapshot.data.allComments;
    console.log(this.router.getCurrentNavigation().extras.state.post);
    this.commentsService.getCommentsByPostId(this.router.getCurrentNavigation().extras.state.post.id).
    subscribe(comments => this.comments = comments);
  }

  ngOnInit(): void {
  }

}
