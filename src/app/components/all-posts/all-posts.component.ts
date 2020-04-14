import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsModel} from '../../models/PostsModel';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: PostsModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.posts = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit(): void {
  }

}
