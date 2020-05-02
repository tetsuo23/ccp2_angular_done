import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './_services/token-storage.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  uri = 'http://localhost:8080/users';
  baseUrl = "http://localhost:8080/api/users";

  getAll() {
    return this.http.get(this.baseUrl);
  }
  // editMember(id: any) {
  //   return this
  //     .http
  //     .get(`${this.uri}/edit/${id}`);
  // }
  // updateMember(MemberName: any, MemberBio: any, MemberAge: any, MemberMail: any, id: any) {
  //   const obj = {
  //     MemberName,
  //     MemberBio,
  //     MemberAge,
  //     MemberMail
  //   };
  //   this
  //     .http
  //     .post(`${this.uri}/update/${id}`, obj)
  //     .subscribe(res => console.log('Done'));
  // }
  // deleteMember(id: any) {
  //   return this
  //     .http
  //     .get(`${this.uri}/delete/${id}`);
  // }
  // addMember(MemberName: any, Pseudo: any, Password: any, MemberAge: any, MemberMail: any) {
  //   const obj = {
  //     MemberName,
  //     Pseudo,
  //     Password,
  //     MemberAge,
  //     MemberMail
  //   };
  //   console.log(obj);
  //   this.http.post(`${this.uri}/add`, obj)
  //     .subscribe(res => console.log('Done'));
  // }
  getUsers() {
    return this
      .http
      .get(`${this.baseUrl}`);
  }
}
