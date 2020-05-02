import { Component, OnInit } from '@angular/core';



import Users from './../models/user'
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  users: Users[];
  username: string;
  email: string;
  password: string;
  role: string;

  currentUser = null;
  currentIndex = -1;

  constructor(private ms: UserService) { }

  // ngOnInit() {
  //   this.retrieveUsers();
  // }

  // retrieveUsers() {
  //   this.MemberService.getAll()
  //     .subscribe(
  //       data => {
  //         this.users = data;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // setActiveUser(tutorial, index) {
  //   this.currentUser = tutorial;
  //   this.currentIndex = index;
  // }

  // removeAllTutorials() {
  //   this.MemberService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveUsers();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // deleteMember(id: any, index: number) {
  //   this.ms.deleteMember(id).subscribe(res => {
  //     this.members.splice(index, 1);
  //   });
  // }
  ngOnInit() {
    this.ms
      .getUsers()
      .subscribe((data: Users[]) => {
        this.users = data;
      });
  }

}

