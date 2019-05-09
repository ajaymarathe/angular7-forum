import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  login;

  ngOnInit() {
    this.LoginStatus();
  }

  LoginStatus(){
    const access_token = localStorage.getItem('access_token');
    if(access_token){
      this.login = false;
    }else{
      this.login = true;
      this.router.navigate(['login']);
    }
  }

}
