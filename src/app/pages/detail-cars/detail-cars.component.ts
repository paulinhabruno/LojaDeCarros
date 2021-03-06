import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detail-cars',
  templateUrl: './detail-cars.component.html',
  styleUrls: ['./detail-cars.component.css']
})
export class DetailCarsComponent implements OnInit {

  checkoutForm!: FormGroup;
  cars!: Car;
  id: number = 0;

  constructor(
    private carService: CarService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { this.createFormEmpty() }

  ngOnInit(): void {  
    const carId = this.id = this.activatedRoute.snapshot.params['id'];

    this.carService.getCarsById(carId).subscribe(
      data => {
        this.createForm(data);
      }
    )
  }

  createForm(cars: Car){
    this.checkoutForm.controls['id'].setValue(cars.id);
    this.checkoutForm.controls['model'].setValue(cars.model);
    this.checkoutForm.controls['color'].setValue(cars.color);
    this.checkoutForm.controls['price'].setValue(cars.price);
  }

  createFormEmpty(){
    this.checkoutForm = this.fb.group({
      id: [''],
      model: [''],
      color: [''],
      price: [''],
    })
  }

}
