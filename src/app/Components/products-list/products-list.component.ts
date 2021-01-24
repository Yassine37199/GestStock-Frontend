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
  searchName = '';
  NameSearch = '';
 
  

  constructor(private productservice : ProductService , private categoryservice : CategoryService ) { }

  ngOnInit(): void {
    
    // get liste des produits de la base 
    this.productservice.getAllProducts().subscribe((res : any) => {
      this.products = res.data;
    })



  }
  
  // supprimer le produit
  deleteProduct(id : string){
    this.productservice.deleteProduct(id).subscribe((r) => {
      alert('Product DELETED');
      location.reload();
    })
  }
  
  // filtrer la liste des produits selon brand
  filterProduct(){
    this.NameSearch = this.searchName;
    console.log(this.searchName);
    console.log(this.NameSearch);   }

  


  }

 


