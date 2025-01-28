// dukes-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Duke {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class DukesServiceService {
  private baseUrl = 'http://localhost:8080/JavEE/resources';

  constructor(private http: HttpClient) {}


  
  getDukes(): Observable<Duke[]> {
    return this.http.get<Duke[]>(`${this.baseUrl}/dukes`, {
      withCredentials: true
    });
  }
}