import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../service/posts.service';
import {PostsModel} from '../../models/PostsModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  post: PostsModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateComments(post: PostsModel) {
    this.router.navigate([post.id, 'comments'], {
      state: {post},
      queryParams: {idOfPost: post.id},
      relativeTo: this.activatedRoute,
    });
  }
}
