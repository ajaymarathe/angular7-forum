import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

  constructor(private http: HttpClient) { }

  // Me(){
  //   return this.http.get('');
  // }
}
