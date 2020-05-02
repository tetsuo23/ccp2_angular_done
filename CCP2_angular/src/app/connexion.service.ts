import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:8080/connexion';
  connexion(Pseudo: any, Password: any) {
    const obj = {
      Pseudo,
      Password,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getConnexion() {
    return this
      .http
      .get(`${this.uri}`);
  }
}
