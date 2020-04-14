import {CommentsModel} from './CommentsModel';

export interface PostsModel{
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentsModel[];
}
