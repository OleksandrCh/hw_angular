import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../service/posts.service';
import {PostsModel} from '../../models/PostsModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  post: PostsModel;
  constructor() {

  }

  ngOnInit(): void {
  }

}
