import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentsModel} from '../models/CommentsModel';
import {Observable} from 'rxjs';
import {CommentsService} from './comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<CommentsModel[]>{

  constructor(private commentsService: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentsModel[]> | Promise<CommentsModel[]> | CommentsModel[] {
    return this.commentsService.getComments();
  }
}
