import { Component, OnInit } from '@angular/core';
import { GetCategoriesService } from '../get-categories.service';
import { ShowquestionService } from '../showquestion.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  title;
  category;
  markdownText;

  categories;
  responseData;

  constructor(
    private getcategories: GetCategoriesService,
     private getquestion: ShowquestionService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.GetCategories();
    this.GetQuestion();
  }

  editQuestion(){
    console.log();
  }

  GetQuestion(){
    console.log("this is parms",this.route.snapshot.params.id);
    // this.getquestion.SingleQuestion()
    // subscribe(
    //   (response: Response) {
    //     console.log(response);
    //   }
    // );
  }

  GetCategories(){
    this.getcategories.CategoriesGet()
    .subscribe(
      (response: Response) => {
        this.responseData = response;
        this.categories = Object.keys(this.responseData.data).map((keys) => this.responseData.data[keys]);
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
