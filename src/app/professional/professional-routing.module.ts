import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalPageComponent } from './professional-page/professional-page.component';

const routes: Routes = [
  {
    path: "", component: ProfessionalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
