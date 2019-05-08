import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private questionservice: QuestionsService) { }

  questions;

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    console.log("you are in questions");
    this.questionservice.getAllQuestions()
    .subscribe(
      (response: Response) => {
        this.questions = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
