import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsModel} from '../../models/PostsModel';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: PostsModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private  postsService: PostsService,
              private router: Router) {
    // this.posts = this.activatedRoute.snapshot.data.allPosts;
    this.activatedRoute.queryParams.subscribe(queryParam => {
      postsService.getPostsOfUserById(queryParam.idOfUser).subscribe(postsFromServer => this.posts = postsFromServer);
    } );

  }

  ngOnInit(): void {
  }

}
