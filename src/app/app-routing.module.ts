import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarsComponent } from './pages/home-cars/home-cars.component';
import { NewCarsComponent } from './pages/new-cars/new-cars.component';

const routes: Routes = [

  {
    path: '', // vai iniciar através desse caminho
    component: HomeCarsComponent
  },
  {
    path: 'new-cars',
    component: NewCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
