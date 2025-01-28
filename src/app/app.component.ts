import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DukesServiceService } from './services/dukes-service.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // Import firstValueFrom for async handling
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgFor],
  template: `
    <h1>Dukes List</h1>
    <ol>
      <li *ngFor="let duke of dukes">{{duke.name}} {{duke.age}}</li>
    </ol>
  `
})
export class AppComponent implements OnInit {
  title = 'Proyecto10';
  dukes: { name: string, age: number }[] = [{ name: 'offline', age: 2 }, { name: 'cacthed', age: 3 }];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    firstValueFrom(this.http.get<{ name: string, age: number }[]>("http://localhost:8080/JavEE/resources/dukes"))
      .then(r => this.dukes = r)
      .catch(error => console.error('Error fetching data:', error));
  }
}
