import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersModel} from '../models/UsersModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
