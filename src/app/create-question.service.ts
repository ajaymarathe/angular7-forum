import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateQuestionService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:8000/api/question';

  createQuestion(publisQuestion){
    console.log(publisQuestion);
    return this.http.post(this.url,{
      title: publisQuestion[0],
      category_id: publisQuestion[1],
      body: publisQuestion[2],
    });
  }
}
