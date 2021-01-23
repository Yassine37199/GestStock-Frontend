import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms'
import { Category } from 'src/app/Category';
import { ProductService } from 'src/app/product.service';

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

  




  constructor(private fb: FormBuilder , private productservice : ProductService) { }

  ngOnInit(): void {

    
    this.Maquillage = [
      { name:'Fond de teint', category:'Maquillage/font de teint'},
      { name:'Mascara', category:'Maquillage/Mascara'},
      { name:'Rouge à lèvre', category:'Maquillage/Rouge à lèvres'},
      { name:'Vernis à ongles', category:'Maquillage/Vernis à ongles'}
    ];

    this.Parfums = [
      { name:'Eau de Parfum', category:'Parfums/Eau de Parfum'},
      { name:'Eau de toilette ', category:'Parfums/Eau de toilette'},
      { name:'Pack', category:'Parfums/Pack'}
    ];

    this.ProduitCosmetiques = [
      { name:'Maquillage', category:'Produit cosmètiques/Maquillage'},
      { name:'Crème ', category:'Produit cosmètiques/Crème'},
      { name:'Masque', category:'Produit cosmètiques/Masque'}
    ];

    this.ProduitHygiene = [
      { name:'Shampoing', category:'Produit hygiène/Shampoing'},
      { name:'Aprés Shampoing', category:'Produit hygiène/Aprés Shampoing'},
      { name:'Déodorant', category:'Produit hygiène/Déodorant'},
      { name:'Gel douche', category:'Produit hygiène/Gel douche'}
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
    this.productservice.AddProduct({
      name : 'Product Test',
      productCode : 'dqsfqsfqsfsq',
      quantity : 100,
      price : 100,
      brand : 'brand test',
      model : 'model test',
      category_id : ''
    }).subscribe((r) => {
      console.log('Produit ajouté avec succée')
    })  }

}
