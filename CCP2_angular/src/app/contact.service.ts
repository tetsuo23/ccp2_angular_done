import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:8080/contact';
  editContact(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updateContact(Name: any, Mail: any, Contact: any, id: any) {
    const obj = {
      Name,
      Mail,
      Contact
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteContact(id: any) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
  addContact(Name: any, Mail: any, Contact: any) {
    const obj = {
      Name,
      Mail,
      Contact
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getContact() {
    return this
      .http
      .get(`${this.uri}`);
  }
}
