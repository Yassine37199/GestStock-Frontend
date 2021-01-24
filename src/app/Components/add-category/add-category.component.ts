import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  CategoryForm : FormGroup;

  constructor(private fb : FormBuilder,
              private categoryservice : CategoryService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm():void{
    this.CategoryForm = this.fb.group({
      name: '',
      pathCat : ''
    })
  }
 

  // ajouter une categorie
  onSubmit(){
    var categoryName = this.CategoryForm.get('name').value;
    const MyForm = JSON.stringify(this.CategoryForm.getRawValue());

    this.categoryservice.AddCategory(MyForm).subscribe(res => {
      alert(`la categorie ${categoryName} ajouté avec succée`);
    })

    this.CategoryForm.reset;

    this.categoryservice.getCategories().subscribe(res => {
      console.log(res);
    })
  }

}
