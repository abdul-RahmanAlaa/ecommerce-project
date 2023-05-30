import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  signUpUser(newUser: Iuser): Observable<Iuser> {
    return this.httpClient.post<Iuser>(
      `${environment.APIURL}/users`,
      JSON.stringify(newUser),
      this.http
    );
  }
}
