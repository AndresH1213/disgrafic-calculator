import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  formFields: any = {
    pliegos: 0,
    planchas: {
      tipo: '',
      cant: 0,
    },
    papel: {
      clase: '',
      tamano: '',
      cant: 0,
    },
    maquina: {
      tipo: '',
      cant: 0,
    },
    diseno: {
      label: 'Diseño',
      precio: 0,
    },
    numerada: {
      label: 'Numerada',
      precio: 0,
    },
    perforada: {
      label: 'Perforada',
      precio: 0,
    },
    troquelada: {
      label: 'Troquelada',
      precio: 0,
    },
    troquel: {
      label: 'Troquel',
      precio: 0,
    },
    encuadernacion: {
      label: 'Encuadernación',
      precio: 0,
    },
    plastificado: {
      label: 'Plastificado',
      precio: 0,
    },
    reservauv: {
      label: 'Reserva UV',
      precio: 0,
    },
    empaqueEnvio: {
      label: 'Empaque y Envio',
      precio: 0,
    },
    porcentaje: {
      label: 'Porcentaje',
      precio: 0,
    },
  };
  value6: number | undefined;
  workforceFields = [
    'diseno',
    'numerada',
    'perforada',
    'troquelada',
    'troquel',
    'encuadernacion',
    'plastificado',
    'reservauv',
    'empaqueEnvio',
  ];

  tiposMaquina = ['holi', 'holi'];
  tamanoPapel = ['holi', 'holi'];
  tiposPlancha = ['holi', 'holi'];
  countries: any = [];
  cities = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {
    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' },
            ],
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' },
            ],
          },
        ],
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal', code: 'C-MO' },
              { cname: 'Quebec City', code: 'C-QU' },
            ],
          },
          {
            name: 'Ontario',
            cities: [
              { cname: 'Ottawa', code: 'C-OT' },
              { cname: 'Toronto', code: 'C-TO' },
            ],
          },
        ],
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' },
              { cname: 'San Francisco', code: 'US-SF' },
            ],
          },
          {
            name: 'Florida',
            cities: [
              { cname: 'Jacksonville', code: 'US-JA' },
              { cname: 'Miami', code: 'US-MI' },
              { cname: 'Tampa', code: 'US-TA' },
              { cname: 'Orlando', code: 'US-OR' },
            ],
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Austin', code: 'US-AU' },
              { cname: 'Dallas', code: 'US-DA' },
              { cname: 'Houston', code: 'US-HO' },
            ],
          },
        ],
      },
    ];
  }
}
