import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent implements OnInit {

  checkoutForm!: FormGroup;
  cars!: Car;
  id: number = 0;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { this.createFormEmpty() }

  ngOnInit(): void {

    let carId = this.id = this.activatedRoute.snapshot.params['id'];

    this.carService.getCarsById(carId).subscribe(data => {
      this.createForm(data)
    })
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

  UpdateFormCar(){
    const updateCar = this.checkoutForm.getRawValue() as Car;
    this.carService.updateCarById(updateCar).subscribe(() => {
      this.router.navigate([''])
    })
  }

}
