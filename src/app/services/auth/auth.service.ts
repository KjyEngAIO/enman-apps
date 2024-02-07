import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { baseUrl } from 'src/app/services/base_url';
import { httpHandler } from 'src/app/services/http.handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _baseUrl() {
    return new baseUrl()._apiUrl();
  }

  private _url: string = this._baseUrl();

  constructor(private http: HttpClient) { }

  login = (username: string, password: string) => {
    return this.http.post(this._url + '/users/login', {
      username,
      password
    }, httpOptions);
  }

  geTotalVisitors = () => {
    return this.http.get(this._url + "/users/histories").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }
  
}