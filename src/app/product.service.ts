import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = environment.api;
  url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http : HttpClient) { 
  }

  getAllProducts(){
    return this.http.get(this.url + environment.api+ "products");
}
  
  AddProduct(data : Object){
    return this.http.post(this.url + environment.api + "products" , data , {headers : this.httpOptions.headers})
  }

  deleteProduct(id : string){
    return this.http.delete(this.url + environment.api + "products" + '/' + id);
  }
  
}
