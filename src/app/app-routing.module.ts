import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home/home-page/home-page.component';
import { NFPageComponent } from './not-found/nfpage/nfpage.component';


const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) 
  },
  {
    path: 'personalLife', loadChildren: () => import('./personal/personal.module').then((m) => m.PersonalModule) 
  },
  {
    path: 'professionalLife', loadChildren: () => import('./professional/professional.module').then((m) => m.ProfessionalModule) 
  },
  {
    path: 'contactMe', loadChildren: () => import('./contact-me/contact-me.module').then((m) => m.ContactMeModule) 
  },
  {
    path: '', component: HomePageComponent
  },
  {
    path: '**', component: NFPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
