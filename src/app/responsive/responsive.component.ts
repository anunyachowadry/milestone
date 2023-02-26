import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent {
 
  images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXgeKykzmJXtBVEvrDtsn-tQ0kwUodgs-zoKJ6nsjXg&s";

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
  
  // cartpage() {
  //   this.router.navigate(['/cart']);
  //  }
  
  
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
  cartpage() {
    this.router.navigate(['/cart']);
   }
   
  
//increase the cartItem product
cartItemFunc(){
  if(localStorage.getItem('anunya') != null){
  var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
  this.cartItem = cartCount.length;
  console.log(this.cartItem)
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





  itemsCart: any = [];  // itemsCart is a global array
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
      this.cartItemFunc();

}




}
