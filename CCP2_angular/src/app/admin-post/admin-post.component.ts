import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { BoardAdminService } from '../_services/board-admin.service';
import { PostService } from '../_services/post.service';
import Post from '../models/post';
import { Router } from '@angular/router';
import User from './../../../node-js-jwt-auth-mongodb/app/models';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  content = '';
  private roles: string[];
  isLoggedIn = false;
  username: string;
  email: string;
  password: string;
  role: string;
  user: string;
  users: User[];
  posts: Post[];

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private bs: BoardAdminService, private ps: PostService, private router: Router) { }
  deletePost(id: any, index: number) {
    this.ps.deletePost(id).subscribe(res => {
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;

      this.password = user.password;
      this.roles = user.roles;
      this.role = user.role;

    }
    this.userService
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      });
    this.bs
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });

  }

}