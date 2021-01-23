import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms'
import { Category } from 'src/app/Category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  CategoryForm : FormGroup;
   
  Parfums:Category[];
  ProduitHygiene:Category[];
  ProduitCosmetiques:Category[];
  Maquillage:Category[];



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.Maquillage = [
      {id:1, name:'Fond de teint', category:'Maquillage/font de teint'},
      {id:2, name:'Mascara', category:'Maquillage/Mascara'},
      {id:3 ,name:'Rouge à lèvre', category:'Maquillage/Rouge à lèvres'},
      {id:4 ,name:'Vernis à ongles', category:'Maquillage/Vernis à ongles'}

    ];





    this.initializeForm();
  }

  initializeForm():void{
    this.CategoryForm = this.fb.group({
      name: '',
      brand: '',
      code: '',
      category: '',
      price : 0,
      quantity: 0
    })
  }

  onSubmit():void{
    console.log(this.CategoryForm);
  }

}
