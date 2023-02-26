import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  grandtotal: number = 0;
  getCartDetails: any = [];
  finalcartItem:any=[];

   Firstname:any;
   Lastname:any;
   PhoneNumber:any;
   Address:any;
   City:any;
   State:any;
   Pincode:any;
   Email:any;
continuetopay:any;

  
   name:any;
   price:any;
   qnt:any;
  prodId:any;
  Totalprice:any;
  // grandtotal:any;
  
  
  imgurl:any;


  // OrderItems:any=[]

   

  pop=false;
 
  ngOnInit(): void {
   
//  OrderItems={
//   name: new FormControl(),
//     price: new FormControl(),
//     prodId: new FormControl(),
//     imgurl:new FormControl(),

// }
 


   
    

 
  
this.continuetopay () 
{
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}

 
  

 
}
   

//  Adddata(){
//   var requestOptions = {
//     method: 'POST',
//     body:JSON.stringify(this.details.value)
//   };
//   console.log(requestOptions);  
//   fetch("http://localhost:5900/detailsRouter/create",{
//     method:'POST',
//     headers:{
//       "Access-Control-Allow-Origin":"*",
//       "Content-Type":'application/json'
//     },
//   body:JSON.stringify(this.details.value)
   
//   })  .then(response => response.json())
  
//   .then(result =>
//     console.log(result))
   
//   .catch(error => console.log('error',error));
  
//   }
popup(){
  this.pop=true;
}
close(){
  this.pop=false;
}

//post api for place order 
cash(){

  // var subObj={
  //   name:this.name,
  //   price:this.price,
  // //  grandtotal:this.grandtotal,
  //   prodId:this.prodId,
  //   // Totalprice:this.Totalprice,
  //  imgurl:this.imgurl,
  //  qnt:this.qnt,

 

  
  // }

  
this.finalcartItem = localStorage.getItem('anunya')
  console.log(this.finalcartItem);
  
  this.getCartDetails=localStorage.getItem('anunya')

  this.getCartDetails = [];
  

  // this.grandtotal = 0;
  var Obj ={
    "Firstname":this.Firstname,
    "Lastname":this.Lastname,
    "Pincode":this.Pincode,
    "PhoneNumber":this.PhoneNumber,
    "Email":this.Email,
    "Address":this.Address,
   "City":this.City,
   "State":this.State,

   "OrderItems":JSON.parse(this.finalcartItem)
  
  }

  var requestOptions = {
        method: 'POST',
        body:Obj
      };
      console.log(Obj);  
      console.log(JSON.stringify(Obj))
      fetch("http://localhost:6900/orderRoute/post",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(Obj)
       
      })  .then(response => response.json())
      
      .then(result =>{
        console.log(result)
        localStorage.removeItem('anunya');
      })

       
      .catch(error => console.log('error',error));
      
      
  this.close( )
  

    
  Swal.fire('order  placed Successfully!', '', 'success').then(() => {
    window.location.href=('/products');
});


 
  
}
  
    



 



}
