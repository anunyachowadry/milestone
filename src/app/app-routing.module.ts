import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmptyComponent } from './empty/empty.component';

import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductrouteComponent } from './productroute/productroute.component';
import { ProductsComponent } from './products/products.component';
import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path :'cart', component:CartComponent},
  {path : 'checkout',component:CheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'empty',component:EmptyComponent},
  {path:'productroute', component:ProductrouteComponent},
  {path:'responsive',component:ResponsiveComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
