import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home-cars',
  templateUrl: './home-cars.component.html',
  styleUrls: ['./home-cars.component.css']
})
export class HomeCarsComponent implements OnInit {

  title = "Gerenciamento de Carros";

  car = {} as Car;

  cars: Car[] | any;

  checkoutForm: any;

  constructor(
    private carService: CarService,
    private router: Router){
}

  ngOnInit(): void {
    this.getCars()
  }
//chama o serviço para obter todos os carros.
  getCars(){
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    })
  }

}
