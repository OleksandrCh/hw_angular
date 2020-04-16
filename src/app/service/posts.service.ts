import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersModel} from '../models/UsersModel';
import {PostsModel} from '../models/PostsModel';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPostsOfUserById(id): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
