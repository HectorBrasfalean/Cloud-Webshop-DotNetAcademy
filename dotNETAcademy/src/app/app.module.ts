import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './productenlijst/product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductenService } from './common/producten.service';

import { HttpClientModule } from '@angular/common/http';
import { ProductenlijstComponent } from './productenlijst/productenlijst.component';
import { MsalService }  from './services/msal.service';
import { WinkelmandComponent } from './winkelmand/winkelmand.component';
import { WinkelmandItemComponent } from './winkelmand/winkelmand-item/winkelmand-item.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { BestellingComponent } from './bestellingen/bestelling/bestelling.component';
import { BestellingenService } from './services/bestellingen.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    ProductenlijstComponent,
    WinkelmandComponent,
    WinkelmandItemComponent,
    ProductInfoComponent,
    BestellingenComponent,
    BestellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductenService,
    BestellingenService,
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
