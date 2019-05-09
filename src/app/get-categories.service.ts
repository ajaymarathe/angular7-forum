import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/category';

  CategoriesGet(){
    return this.http.get(this.url);
  }
}
