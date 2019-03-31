import { Component } from '@angular/core';


import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yoshna';


  constructor(private http: HttpClient) {
    this.http.get('http://localhost/yoshna/order_item.php').subscribe(v=>{
      console.log(v);
    });
  } 
}


// {"name":"J","count":2,"price":"33050","address":"pillayar koil street\nmamallapuram\nchennai\ntamil naadu\n603104","mobile":"9789844647","datetime":"30-Mar-2019 06:16:30 PM","random":"291"}