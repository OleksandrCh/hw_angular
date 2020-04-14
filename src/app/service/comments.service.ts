import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentsModel} from '../models/CommentsModel';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
