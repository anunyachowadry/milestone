import { Component } from '@angular/core';

import { NgbCarouselConfig,NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';


@Component({
  selector: 'ngbd-carousel-config',

  templateUrl: './productroute.component.html',
  styleUrls: ['./productroute.component.css'],
  imports: [NgbCarouselModule, NgIf],
	standalone: true,



  
})
export class ProductrouteComponent {
  
  
  images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXgeKykzmJXtBVEvrDtsn-tQ0kwUodgs-zoKJ6nsjXg&s";

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

  
  products:any=[];
  cartItem:number = 0;
  router:any=[];
item:any=[];
name:any;
imgurl:any;
prodId:any;
price:any;
qnt:any;
Totalprice:any;

ngOnInit(): void {
  

  this.get();
   this.cartItemFunc();
   
 
   

//    let sliderImages:any = document.querySelectorAll(".slide");

// let arrowLeft:any = document.querySelector("#arrow-left");

// let arrowRight:any = document.querySelector("#arrow-right");

// let current = 0;



// function initial() {

//   for (let i = 0; i < sliderImages.length; i++) {

//     sliderImages[i].style.display = "none";

//   }

// }



// function startSlide() {

//   initial();

//   sliderImages[0].style.display = "block";

// }



// function slideLeft() {

//   initial();

//   sliderImages[current - 1].style.display = "block";

//   current--;

// }



// function slideRight() {

//   initial();

//   sliderImages[current + 1].style.display = "block";

//   current++;

// }



// arrowLeft.addEventListener("click", function() {

//   if (current == 0) {

//     current = sliderImages.length;

//   }

//   slideLeft();

// });



// arrowRight.addEventListener("click", function() {

//   if (current == sliderImages.length - 1) {

//     current = -1;

//   }

//   slideRight();

// });



// startSlide();

//   }

}



cartpage() {
  this.router.navigate(['/cart']);
 }
 cartItemFunc() {
  if (localStorage.getItem('anunya') != null) {
    var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
    this.cartItem = cartCount.length;

  }
}



// get the details into localstorage
CartDetails() {
  if (localStorage.getItem('anunya')) {          // localCartis a key
    this.products = JSON.parse(localStorage.getItem('anunya') || '{}');
  }
}

incQnt(prodId: any, qnt: any) {  // increase the qnt product 
  for (let i = 0; i < this.products.length; i++) {   // this is forloop
    if (this.products[i].prodId === prodId) {  // based on the prodId
      if (qnt != 1000)
        this.products[i].qnt = parseInt(qnt) + 1;  // increase the qnt max5
    }
  }
  localStorage.setItem('anunya', JSON.stringify(this.products)); // localCart is akey ,getCartDetails is aarray
  this.loadCart()
}

decQnt(prodId: any, qnt: any) {   // decrease the qunt product
  for (let i = 0; i < this.products.length; i++) {  // thi is for loop
    if (this.products[i].prodId === prodId) { // decrease the product based on the id
      if (qnt != 1)
        this.products[i].qnt = parseInt(qnt) - 1;  // decrease the product lessthan 1
    }
  }
  localStorage.setItem('anunya', JSON.stringify(this.products)); // localCart is akey ,getCartDetails is aarray
  this.loadCart()
}

// total amount
grandtotal: number = 0;
//total function
loadCart() {
  if (localStorage.getItem('anunya')) {
    this.products = JSON.parse(localStorage.getItem('anunya') || '{}');
    this.grandtotal = this.products.reduce(function (acc: number, val: { price: number; qnt: number; }) {   // acc is a name,val isa rate
      return acc + (val.price * val.qnt);  // return the total amount
    }, 0);
  }
}






get() {
  console.log('getStoreProducts')
  fetch("http://localhost:1000/productRouter/products", {
    method: 'GET',
    headers: {
      "access-Control-Allow-Origin": "*",

    },


  })
     .then(response => response.json())
    .then((result) => {
      console.log(result.products)
        this.products = result.products
      console.log(this.products)
    }

    ).catch(err =>
      console.log(err))
}

itemsCart: any = []; 
addCart(category: any) {
  let cartDataNull = localStorage.getItem('anunya'); // cartDataNull is a variable , localCart is a key,
  if (cartDataNull == null) {
    let storeDataGet: any = []; // storeDataGet is a array
    storeDataGet.push(category); // push the category into localstorage
    localStorage.setItem('anunya',JSON.stringify(storeDataGet));  //localCart is key ,storeDataGet is To convert the stringify
  }
  else {
    var id = category.prodId;  // this is product id represented
    let index: number = -1;
    this.itemsCart = JSON.parse(localStorage.getItem('anunya') || '{}'); // 
    for (let i = 0; i < this.itemsCart.length; i++) {   // i is a loop vice (inc is the products)
      if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {    // In parseInt to store itemcart array in index
        this.itemsCart[i].qnt = category.qnt;  // this qnt is inc and dec the product
        index = i;
        break;  // to break the function (end)
      }
    }
    if (index == -1) {
      this.itemsCart.push(category);  // this line product item to push itemcart array
      localStorage.setItem('anunya', JSON.stringify(this.itemsCart));  //
    }
    else {
      localStorage.setItem('anunya', JSON.stringify(this.itemsCart));
    }
  }
   

}

}
