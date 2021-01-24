import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products : any[];
  filteredProducts : any[];
  searchName = '';
  Path = '';
  NameSearch = '';
 
  

  constructor(private productservice : ProductService , private categoryservice : CategoryService ) { }

  ngOnInit(): void {

    this.productservice.getAllProducts().subscribe((res : any) => {
      this.products = res.data;
    })

    this.getCategoryPath();


  }

  deleteProduct(id : string){
    this.productservice.deleteProduct(id).subscribe((r) => {
      alert('Product DELETED');
      location.reload();
    })
  }

  filterProduct(){
    this.NameSearch = this.searchName;
    console.log(this.searchName);
    console.log(this.NameSearch);   }

  
  getCategoryPath(){
      this.categoryservice.getCategorieByName('Mascara').subscribe((res : any) => {
      this.Path = res.data[0].pathCat;
      })
  }


  }

 


