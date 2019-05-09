import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateQuestionComponent,
    ShowQuestionComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    EditQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
