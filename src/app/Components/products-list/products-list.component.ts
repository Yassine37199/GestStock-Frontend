import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products : any = [];

  constructor(private productservice : ProductService) { }

  ngOnInit(): void {

    this.productservice.getAllProducts().subscribe((res : any) => {
      this.products = res.data;
      console.log(this.products);
      
    })

   

  }

  deleteProduct(id : string){
    this.productservice.deleteProduct(id).subscribe((r) => {
      console.log('Product DELETED');
    })
  }

}
