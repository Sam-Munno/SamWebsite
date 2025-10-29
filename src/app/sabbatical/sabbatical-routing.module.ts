import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SabbaticalPageComponent } from './sabbatical-page/sabbatical-page.component';

const routes: Routes = [
  {
    path: '', component: SabbaticalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabbaticalRoutingModule { }
