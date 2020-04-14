import { Injectable } from '@angular/core';
import {PostsModel} from '../models/PostsModel';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostsService} from './posts.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<PostsModel[]>{

  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsModel[]> | Promise<PostsModel[]> | PostsModel[] {
    return this.postsService.getPosts();
  }
}
