import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.css']
})
export class NewCarsComponent implements OnInit {

  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private carService: CarService) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      id: [''],
      model: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  registerNewCar(){
    if(this.checkoutForm.invalid){
      return;
    }

    const newCar = this.checkoutForm.getRawValue() as Car;
    this.carService.saveCar(newCar).subscribe( () => {
      this.router.navigate([''])
    })
  }

}
