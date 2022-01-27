import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Car } from '../models/car';

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

//obter todos os carros
getCars(): Observable<Car[]>{
  return this.httpClient.get<Car[]>(this.url)
  .pipe(
  retry(2),
  catchError(this.handleError)
  )
}
//Obter o carro pelo Id
getCarsById(id: number): Observable<Car>{
  return this.httpClient.get<Car>(this.url + '/' + id)
  .pipe(
  retry(2),
  catchError(this.handleError)
  )
}

// salvar o carro

saveCar(car: Car): Observable<Car>{
  return this.httpClient.post<Car>(this.url, JSON.stringify(car), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError)
    )
}

//deletar um carro

deleteCarById(car: Car){
  return this.httpClient.delete<Car>(this.url + "/" + car.id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
    )
}

//Atualizar o carro

updateCarById(car: Car): Observable<Car>{
  return this.httpClient.put<Car>(this.url + '/' + car.id, JSON.stringify(car), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
    )
}


// Manipulação de erros

handleError(error: HttpErrorResponse) {
  let errorMessage = 'Não foi possivel fazer a solicitação :(';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage =
      `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
