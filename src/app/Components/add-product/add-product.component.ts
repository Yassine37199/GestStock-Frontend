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
   
  categorie:Category[];
  



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.categorie = [
      {id:1, name:'Vérnie', category:'Maquillage/Vérnie'},
      {id:2, name:'Mascara', category:'Maquillage/Mascara'}
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
