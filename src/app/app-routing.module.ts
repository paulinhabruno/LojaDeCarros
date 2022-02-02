import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCarsComponent } from './pages/detail-cars/detail-cars.component';
import { EditCarsComponent } from './pages/edit-cars/edit-cars.component';
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
  },

  {
    path: 'detail-cars/:id',
    component: DetailCarsComponent
  },

  {
    path: 'edit-cars/:id',
    component: EditCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
