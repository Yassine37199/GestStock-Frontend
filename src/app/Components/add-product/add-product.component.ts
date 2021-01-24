import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {
  
  ProductForm : FormGroup;
  SelectForm : FormGroup;
  active : boolean = false;
  Categories : any = [];

  




  constructor(private fb: FormBuilder , private productservice : ProductService , private categorieservice : CategoryService , private router : Router) { 
    // get la liste des categories 
    this.categorieservice.getCategories().subscribe((res : any) => {
      this.Categories = res.data;
      console.log(this.Categories);
    })
  
    this.initializeForm();

  }

  ngOnInit(): void {
  }


  initializeForm():void{
    this.SelectForm = this.fb.group({
      categorieSelect : ''
    })

    this.ProductForm = this.fb.group({
      name: '',
      productCode: '',
      quantity: 0,
      price: 0,
      brand : '',
      model : '',
      category : ''
    })
  }


  // ajouter un produit
  onSubmit():void{
    var productName = this.ProductForm.get('name').value;
    console.log(this.ProductForm.value);
    
    const MyForm = JSON.stringify(this.ProductForm.getRawValue());
    this.productservice.AddProduct(MyForm).subscribe((r) => {
      alert(`le produit ${productName} est crée avec succée`);
      this.router.navigate(['']);

    })
    
    
  }
  
  // lire la categorie à partir de premier formulaire
  CatchCategory(){
    console.log(this.SelectForm.get('categorieSelect').value);
    this.active = true;
    this.ProductForm.patchValue({
        category: this.SelectForm.get('categorieSelect').value
    })
  }

}
