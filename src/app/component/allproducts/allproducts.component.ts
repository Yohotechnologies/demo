import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
 
  columns = ['position', 'Brand', 'Price', 'Preview']

  dataSource1;
  
  allProduts;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.dataSource1 = data;
    });
  }

  // getAllProducts() {
  //   // this.http.get('http://localhost/yoshna/get_yoshna_item.php').subscribe(data=>{
  //   //   console.log(data);
  //   // })
  //   // http://localhost/yoshna/get_yoshna_item.php --> Getting All products 
  // }

  onPreview(element){
    this.router.navigate(['dashboard/product', element.id]);
    
  }

}
