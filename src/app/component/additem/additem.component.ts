import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  form: FormGroup;
  category;
  constructor(private productService: ProductService, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.createForm();
    this.productService.getCategory().subscribe(category=>{
      console.log(category);
      this.category = category; 
    })
    // this.category
  }


  createForm() {
    this.form = this.fb.group({
      product_name: '',
      brand: '',
      category: '',
      discount: '',
      price: '',
      description: '',
      images:''
    });
  };




  fileUpload($event, fullPath){
    

    let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    let filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
   
    this.form.patchValue(
      {
        images:filename
      }
    );
    
  }

  addProduct(){
    console.log(this.form.value);
    if(this.form.valid){
      this.productService.addProducts(this.form.value).subscribe(v=>{
        this.form.reset();
      });
    }
    
    //   this.http.post('http://localhost/php_rest_myblog-master/api/post/create.php',this.form.value).subscribe(v=>{
    //   console.log(v);
    // });
  }

  
}
