import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/question';

  getAllQuestions(){
    return this.http.get(this.url);
  }
}
