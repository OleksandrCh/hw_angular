import {PostsModel} from './PostsModel';

export interface UsersModel{
id: number;
name: string;
username: string;
email: string;
phone: string;
website: string;
posts: PostsModel[];
}



