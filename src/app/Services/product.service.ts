import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "/api/v1/";
  url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http : HttpClient) { 
  }

  getAllProducts(){
    return this.http.get(this.url + this.api+ "products");
}
  
  AddProduct(data : Object){
    return this.http.post(this.url + this.api + "products" , data , {headers : this.httpOptions.headers})
  }

  deleteProduct(id : string){
    return this.http.delete(this.url + this.api + "products/" + id);
  }

  UpdateProduct(id : string , data : Object){
    console.log(data);
    return this.http.patch(this.url + this.api + "products/" + id , data , {headers : this.httpOptions.headers})
  }

  getOneProduct(id : string){
    return this.http.get(this.url + this.api + "products/" + id );
  }
  
}
