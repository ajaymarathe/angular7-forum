import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateQuestionService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:8000/api/question';

  createQuestion(publisQuestion){
    const access_token = localStorage.getItem('access_token');
    console.log(access_token);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': access_token,
    // });

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': access_token });
    let options = { headers: headers };

    return this.http.post(this.url,{
      title: publisQuestion[0],
      category_id: publisQuestion[1],
      body: publisQuestion[2],
    },
    options
    // { headers: new HttpHeaders({'Authorization': 'Bearer ' + access_token})},
    )
  }
}
