import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Client {
  id: number;
  cedula: string;
  partido: string;
  nombrePartido: string;
  nombre: string;
  vice: string;
}

@Injectable({
  providedIn: 'root'
})
export class DukesServiceService {
  private baseUrl = 'http://localhost:8080/PruebaS/api/Binomios';

  constructor(private http: HttpClient) {}

  getBinomios(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching clients:', error);
          return throwError(() => new Error('Failed to fetch clients data'));
        })
      );
  }

  sendBinomios(cedulaa: string, nombree: string,partidoo : string,nombreParr : string,vicee: string): any{
    



  }
}