import { Component, OnInit } from '@angular/core';
import { CreateQuestionService } from '../create-question.service';
import { GetCategoriesService } from '../get-categories.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  title;
  category;
  markdownText;

  categories;
  responseData;

  constructor(private createquestionservice: CreateQuestionService, private getcategories: GetCategoriesService) { }

  ngOnInit() {
    this.Categories();
  }

  PublishQuestion(){
    const publisQuestion = [this.title, this.category, this.markdownText];
    console.log(publisQuestion);

    this.createquestionservice.createQuestion(publisQuestion)
    .subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  Categories(){
    this.getcategories.CategoriesGet()
    .subscribe(
      (response: Response) => {
        this.responseData = response;
        this.categories = Object.keys(this.responseData.data).map((keys) => this.responseData.data[keys]);
        console.log(response);
      }
    );
  }

}
