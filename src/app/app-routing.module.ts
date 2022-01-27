import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCarsComponent } from './pages/detail-cars/detail-cars.component';

const routes: Routes = [

  {
    path: '', // vai iniciar através desse caminho
    component: DetailCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
