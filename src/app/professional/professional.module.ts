import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalPageComponent } from './professional-page/professional-page.component'
import { ProfessionalRoutingModule } from './professional-routing.module';


@NgModule({
  declarations: [ProfessionalPageComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule
  ]
})
export class ProfessionalModule { }
