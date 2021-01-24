import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  api = "/api/v1/";
  url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http : HttpClient) { 

}

  AddCategory(data : Object){
    return this.http.post(this.url + this.api + "categories" , data , {headers : this.httpOptions.headers})
  }

  getCategories(){
    return this.http.get(this.url + this.api + "categories");
  }

  getCategorieByName(name : string){
    return this.http.get(this.url + this.api + "categories" + "/getCategory/" + name);

  }

}