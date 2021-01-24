import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  ProductForm : FormGroup;

  id : string;


  constructor(private fb : FormBuilder, 
              private actRoute: ActivatedRoute,
              private router: Router,
              private productservice : ProductService) { }

  ngOnInit(): void {

    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.id);
    
    this.productservice.getOneProduct(this.id).subscribe(res => {
      console.log(res);
    })


    this.initializeForm();
    
  }

  initializeForm():void{
    this.ProductForm = this.fb.group({
      name: '',
      productCode: '',
      quantity: 0,
      price: 0,
      brand : '',
      model : 'model',
      category_id : 'categoty'
    })
  }

  onSubmit():void{

    console.log(this.ProductForm.value);
    const MyForm = JSON.stringify(this.ProductForm.getRawValue());
    this.productservice.UpdateProduct(this.id , MyForm ).subscribe((r) => {
      console.log('string');
      alert('Produit modifié avec succée');
      this.router.navigate(['']);

    })
  }

}
