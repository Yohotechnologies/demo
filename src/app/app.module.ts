import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { MaterialModule } from "./material/material.module";

import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { AdditemComponent } from "./component/additem/additem.component";

import { Routes, RouterModule } from "@angular/router";
import { AllproductsComponent } from "./component/allproducts/allproducts.component";
import { OrdersComponent } from "./component/orders/orders.component";


import { HttpClientModule } from '@angular/common/http';
import { ProductpreviewComponent } from './component/productpreview/productpreview.component';
import { AddcategoryComponent } from './component/addcategory/addcategory.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },

  {
    path: "dashboard",
    component: SidebarComponent,
    children: [
      {
        path: "additem",
        component: AdditemComponent
      },
      {
        path: "allproducts",
        component: AllproductsComponent
      },
      {
        path: "product/:id",
        component: ProductpreviewComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path:'addcategory',
        component: AddcategoryComponent
      }
    ]
  },

  {
    path: "login",
    component: LoginComponent
  }
  // {
  //   path: "home",
  //   component: SidebarComponent
  // }
  // {
  //   path: "additem",
  //   component: AdditemComponent
  // }
];

let config = {
  apiKey: "AIzaSyCOuH-TDd5XYljsNCV0nzUQAPyoYGAz1a8",
  authDomain: "auth-8ffa6.firebaseapp.com",
  databaseURL: "https://auth-8ffa6.firebaseio.com",
  projectId: "auth-8ffa6",
  storageBucket: "auth-8ffa6.appspot.com",
  messagingSenderId: "475069273306"
};
// firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    AdditemComponent,
    AllproductsComponent,
    OrdersComponent,
    ProductpreviewComponent,
    AddcategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    AngularFireAuthModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
