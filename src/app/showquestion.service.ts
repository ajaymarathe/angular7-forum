import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowquestionService {

  constructor(private http: HttpClient) { }

  SingleQuestion(slug){
    // console.log(slug);
    return this.http.get(slug);
  }
}
