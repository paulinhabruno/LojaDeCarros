import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarsComponent } from './pages/home-cars/home-cars.component';

const routes: Routes = [

  {
    path: '', // vai iniciar através desse caminho
    component: HomeCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
