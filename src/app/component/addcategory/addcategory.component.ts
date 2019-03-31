import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      category_name: '',
      categories_images: ''
    })
  }
  fileUpload($event, fullPath){

    let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    let filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
   
    this.form.patchValue({
      categories_images: filename
    });
  }

  addCategory(){
  if(this.form.valid){
    console.log(this.form.value);
    this.productService.addCategory(this.form.value).subscribe(v=>console.log(v));
  }
  }
}
