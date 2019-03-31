import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllCheckOutProduct(){
    return this.http.get('http://localhost/yoshna/get_myorder.php');
  }

  getAllProducts() {
    return this.http.get('http://localhost/yoshna/get_yoshna_item.php');
  }

  addProducts(product){
    return this.http.post('http://localhost/php_rest_myblog-master/api/post/create.php',product);
  }

  getCategory() {
   return this.http.get('http://localhost/yoshna/get_yoshna_category.php');
  }

  previewCategory(id) {
    return this.http.get(`http://localhost/yoshna/detailed_category_item.php/?id=${id}`);
  }

  addCategory(category) {
    return this.http.post('http://localhost/php_rest_myblog-master/CreateCategory/api/post/create_category.php', category);
  }
}
