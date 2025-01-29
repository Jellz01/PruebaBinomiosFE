import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Client {
  id: number;
  cedula: string;
  consumo: string;
  deudas: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class DukesServiceService {
  private baseUrl = 'http://localhost:8080/PruebaS/api/Usuario';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching clients:', error);
          return throwError(() => new Error('Failed to fetch clients data'));
        })
      );
  }
}