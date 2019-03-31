import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.scss']
})
export class ProductpreviewComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params)=> this.productService.previewCategory(params['params']['id']))
    ).subscribe(product=>{
      this.product = product[0];
      console.log(product);
    })
    // this.route.paramMap.subscribe(params=>{
    //   this.productService.previewCategory(params['params']['id']).subscribe(value=>{
    //     console.log(value);
    //   })
    //   console.log(params['params']);
    // })
  }

}
