import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = 'http://localhost:3000/cars';

  // injetar o Httpclient

  constructor(private httpClient: HttpClient) { }

  httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/json'})

  }
}
