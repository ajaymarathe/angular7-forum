import { Component, OnInit } from '@angular/core';
import { SignupService } from "../signup.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  name;
  email;
  password;
  signup;

  constructor(private signupservice: SignupService, private router: Router) { }

  ngOnInit() {
  }

  Signup(){
    const signupData = [this.name, this.email, this.password];
    // console.log(signupData);

    this.signupservice.SignupPost(signupData)
    .subscribe(
      (response: Response) => {
        this.signup = response;
        console.log(response);
        localStorage.setItem("access_token", this.signup.access_token);
        if(this.signup.access_token){
          this.router.navigate(['']);
        }
      },
      (error) => console.log(error)
    );
  }

}
