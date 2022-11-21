import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'viewapp' , component:ViewappointmentComponent},
  {path:'placeapp', component:PlaceappointmentComponent},
  {path:'home' , component:HomeComponent},
  {path:'contact', component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
