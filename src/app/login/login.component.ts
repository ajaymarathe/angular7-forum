import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;
  login;


  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }

  Login(){
    const LoginData = [this.email, this.password];
    // console.log(LoginData);

    this.loginservice.LoginPost(LoginData)
    .subscribe(
      (response: Response) => {
        this.login = response;
        console.log(response);
        localStorage.setItem("access_token", this.login.access_token);
        if(this.login.access_token){
          this.router.navigate(['']);
        }
      }
    );
  }

}
