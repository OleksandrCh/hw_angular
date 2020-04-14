import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UsersModel} from '../models/UsersModel';
import {Observable} from 'rxjs';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<UsersModel[]>{

  constructor(private usersService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersModel[]> | Promise<UsersModel[]> | UsersModel[] {
    return this.usersService.getUsers();
  }
}
