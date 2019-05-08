import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/auth/login'

  LoginPost(LoginData){
    return this.http.post(this.url,{
      email: LoginData[0], 
      password: LoginData[1], 
    });
  }
}
