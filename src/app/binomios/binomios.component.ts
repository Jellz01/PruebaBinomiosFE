import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DukesServiceService } from '../services/dukes-service.service';

@Component({
  selector: 'app-binomios',
  imports: [ReactiveFormsModule,CommonModule,NgIf],
  templateUrl: './binomios.component.html',
  styleUrl: './binomios.component.scss'
})
export class BinomiosComponent implements OnInit {

  userForm: FormGroup;
  emailU: string | null = null;

  constructor(private fb: FormBuilder, private binService: DukesServiceService) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      partido: ['', Validators.required],
      nombrePar: ['', Validators.required],
      vice: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


