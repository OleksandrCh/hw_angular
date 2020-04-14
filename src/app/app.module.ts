import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/user/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import {RouterModule} from '@angular/router';
import {UsersResolveService} from './service/users-resolve.service';
import {PostsResolveService} from './service/posts-resolve.service';
import {CommentsResolveService} from './service/comments-resolve.service';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'users', component: AllUsersComponent, resolve: {allUsers: UsersResolveService}},
      {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostsResolveService}},
      {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentsResolveService}},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

