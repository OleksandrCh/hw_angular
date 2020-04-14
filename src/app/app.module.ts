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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent, resolve: {allUsers: UsersResolveService}},
      {path: 'posts', component: PostsComponent, resolve: {allPosts: PostsResolveService}},
      {path: 'users', component: CommentsComponent, resolve: {allComments: CommentsResolveService}},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
