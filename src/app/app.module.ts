import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailCarsComponent } from './pages/detail-cars/detail-cars.component';
import { HomeCarsComponent } from './pages/home-cars/home-cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NewCarsComponent } from './pages/new-cars/new-cars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCarsComponent } from './pages/edit-cars/edit-cars.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailCarsComponent,
    HomeCarsComponent,
    NewCarsComponent,
    EditCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
