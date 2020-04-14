import {Component} from '@angular/core';
import {UsersModel} from '../models/UsersModel';
import {UsersService} from '../service/users.service';
import {PostsService} from '../service/posts.service';
import {CommentsService} from '../service/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msg = 'users';
  // private http: HttpClient;
  users: UsersModel[] = [];

  constructor(private usersService: UsersService,
              private postsService: PostsService,
              private commentsService: CommentsService) {

    // this.http = http;
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
}
