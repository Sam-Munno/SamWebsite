import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component'
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    RouterModule
  ]
})
export class HomeModule { }
