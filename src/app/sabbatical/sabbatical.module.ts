import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabbaticalPageComponent} from './sabbatical-page/sabbatical-page.component';

import { SabbaticalRoutingModule } from './sabbatical-routing.module';


@NgModule({
  declarations: [SabbaticalPageComponent],
  imports: [
    CommonModule,
    SabbaticalRoutingModule
  ]
})
export class SabbaticalModule { }
