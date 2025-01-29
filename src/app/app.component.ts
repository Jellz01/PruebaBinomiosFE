import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DukesServiceService, Client } from './services/dukes-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule,ReactiveFormsModule,NgIf],
  template: `
      
    <h1>Lista De Binomios</h1>
    <ol>
      <li *ngFor="let client of clients">
        cedula: {{ client.cedula }} Nombre: {{ client.nombre }} Nombre De Partido: {{client.nombrePartido}} Partido:{{client.partido}} vice Presidente: {{client.vice}}
      </li>
    </ol>
    <form [formGroup]="userForm" (ngSubmit)="actualizar()">
        <label for="cedula">Cédula:</label>
        <input type="text" id="cedula" formControlName="cedula" maxlength="10">
        

        <label for="Nombre">nombre:</label>
        <input type="nombre" id="nombre" formControlName="nombre">
        

        <label for="{partido}">Partido:</label>
        <input  id="partido" formControlName="partido" >
        

        <label for="nombrePar">NombrePar:</label>
        <input type="text" id="nombrePar" formControlName="nombrePar">
        

        <label for="vice">Vice:</label>
        <input type="text" id="vice" formControlName="vice">
        

        

        <button type="submit" [disabled]="userForm.invalid">Enviar</button>
    </form>

    

    
  `,
})
export class AppComponent implements OnInit {
  clients: Client[] = [];
  title = 'Proyecto10';
  userForm: FormGroup ;
  nombre: string = '';
  cedula: string = '';
  partido: string = '';
  nombrePar: string = '';
  vice: string = '';

  searchCedula: string = '';
  filteredClient: Client | null = null;

  constructor(private dukesService: DukesServiceService,private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      partido: ['', Validators.required],
      nombrePar: ['', Validators.required],
      vice: ['', Validators.required]
    });
    

    
  }

  ngOnInit(): void {
    this.dukesService.getBinomios().subscribe({
      next: (data) => (this.clients = data),
      error: (err) => console.error('Error fetching clients:', err),
    });
    

  }


  actualizar(): void{
    //this.dukesService.sendBinomios()

  }

  searchClient(): void {
    this.filteredClient = this.clients.find(client => client.cedula === this.searchCedula) || null;
  }
}

