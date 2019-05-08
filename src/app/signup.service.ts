import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/auth/signup';


  SignupPost(signupData){
    console.log(signupData);
    return this.http.post(this.url,{
      name : signupData[0],
      email: signupData[1],
      password: signupData[2],   
      password_confirmation: signupData[2],
    });
  }


}
