import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GooglePayButtonModule } from "@google-pay/button-angular";





import { NgxPayPalModule } from 'ngx-paypal';




import { MatInputModule } from '@angular/material/input';

import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { EmptyComponent } from './empty/empty.component';
import { ProductrouteComponent } from './productroute/productroute.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveComponent } from './responsive/responsive.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    PaymentComponent,
    EmptyComponent,
    ResponsiveComponent,
    // ProductrouteComponent,
   
  
 
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    NgbCarouselModule,
    MatCardModule,
    NgImageSliderModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    GooglePayButtonModule,
    NgxPayPalModule,
    NgbModule,
   
    
 
    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
 

}
