import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../service/users.service';
import {PostsService} from '../../service/posts.service';
import {CommentsService} from '../../service/comments.service';
import {UsersModel} from '../../models/UsersModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: UsersModel[] = [];
  constructor(private usersService: UsersService,
              private postsService: PostsService,
              private commentsService: CommentsService) {

    this.usersService.getUsers().subscribe(users => {
      this.postsService.getPosts().subscribe(posts => {
        this.commentsService.getComments().subscribe(comments => {

          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (user.id === post.userId) {
                post.comments = [];
                for (const comment of comments) {
                  if (post.id === comment.postId){
                    post.comments.push(comment);
                  }
                }
                user.posts.push(post);
              }
            }
            this.users.push(user);
          }
        });
      });
    });
  }

  ngOnInit(): void {
  }

}
