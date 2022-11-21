import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DataserviceService } from './service/dataservice.service';
import { FormsModule } from '@angular/forms';
import { PlacebuttonComponent } from './placebutton/placebutton.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';


const appRoutes: Routes =[
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewappointmentComponent,
    PlaceappointmentComponent,
    ContactusComponent,
    FooterComponent,
    PlacebuttonComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlacebuttonComponent,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
