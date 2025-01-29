import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DukesServiceService, Client } from './services/dukes-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Clients List</h1>
    <input type="text" [(ngModel)]="searchCedula" placeholder="Enter Cedula" />
    <button (click)="searchClient()">Search</button>
    
    <div *ngIf="filteredClient">
      <h2>Client Found:</h2>
      <p>{{ filteredClient.nombre }} - Cedula: {{ filteredClient.cedula }} - Deudas: {{ filteredClient.deudas }}</p>
    </div>
    <div *ngIf="searchCedula && !filteredClient">
      <p>No client found with cedula: {{ searchCedula }}</p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  clients: Client[] = [];
  title = 'Proyecto10';
  searchCedula: string = '';
  filteredClient: Client | null = null;

  constructor(private dukesService: DukesServiceService) {}

  ngOnInit(): void {
    this.dukesService.getClients().subscribe({
      next: (data) => (this.clients = data),
      error: (err) => console.error('Error fetching clients:', err),
    });
  }

  searchClient(): void {
    this.filteredClient = this.clients.find(client => client.cedula === this.searchCedula) || null;
  }
}

