import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ShowquestionService } from  '../showquestion.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})
export class ShowQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private showquestion: ShowquestionService) { }
  singleQuestion;

  ngOnInit() {
    this.getSingleQuestion();
  }

  getSingleQuestion(){
    const slug = this.route.snapshot.params.id;

    this.showquestion.SingleQuestion(slug)
    .subscribe(
      (response: Response) => {
        this.singleQuestion =  Object.keys(response).map((keys) => response[keys])
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
