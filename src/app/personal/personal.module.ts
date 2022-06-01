import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPageComponent} from './personal-page/personal-page.component';

import { PersonalRoutingModule } from './personal-routing.module';


@NgModule({
  declarations: [PersonalPageComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
