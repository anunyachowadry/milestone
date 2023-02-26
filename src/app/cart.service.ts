// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

  //public cartItemList : any =[]                           // cartitem public

  // public productList = new BehaviorSubject<any>([]);     // productlist public

         // search public


  //constructor() { }
  //get the cart
  //get(){
    //return this.productList.asObservable();                //productlist is a array ,observable is a class 
    //BehaviorSubject is a variant of a Subject which has a notion of the current value that it stores and emits to all new subscriptions.
  //}
    // setproduct this is optional here
 
  // addtocart
//   addtoCart(product : any){
//     console.log(product)
// if (this.cartItemList.length > 0){
//   for(var i = 0; i < this.cartItemList.length; i++) 
//   {
//     if(this.cartItemList[i]._id==product._id )
//     {
      //once we found the matching item in array we should increase the qty and inc price
//       this.cartItemList[i].price=this.cartItemList[i].price + product.price;
//       this.cartItemList[i].Quantity=this.cartItemList[i].Quantity+1 ;
      
//     }else{
//       this.cartItemList.push(product); 
      
//     }
//   }


// }
// else{
//   this.cartItemList.push(product); 
   
// }




    // this.cartItemList.push(product); 
    // this.productList.next(this.cartItemList);           
   // this.getTotalPrice();
    //console.log(this.cartItemList)
     // set a key/value
// localStorage.setItem('cartData ',this.cartItemList);
//   }  
    // this is a gettotalprice
  // getTotalPrice() : number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any)=>{                         
  //     grandTotal += a.total ;
  //   })
  //   return grandTotal;
  // }
   // remove the cart item
  // removeCartItem(product : any) {         
    //this.cartItemList.map((a:any,index:any)=>{               //  artItemList is array ,a is  variable     
    //   if(product.id===a.id){            
    //     this.cartItemList.splice(index,1);
    //   }
    // })
    
  //}
   // removealldata
// removeAllCart(){
//   this.cartItemList =[]                                              
  
// }

// }
 








// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   public cartItemList : any =[]
//   public productList = new BehaviorSubject<any>([]);
//   public search = new BehaviorSubject<string>("");

//   constructor() { }
//   get(){
//     return this.productList.asObservable();
//   }

//   setProduct(product : any){
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }
//   addtoCart(product : any){
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//     console.log(this.cartItemList)
//   }
//   getTotalPrice() : number{
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//     return grandTotal;
//   }
//   removeCartItem(product: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(product.id=== a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//     this.productList.next(this.cartItemList);
//   }
//   removeAllCart(){
//     this.cartItemList = []
//     this.productList.next(this.cartItemList);
//   }
// }