import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../services/calc.service';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-form-work-labor',
  templateUrl: './form-work-labor.component.html',
  styleUrls: ['./form-work-labor.component.css'],
})
export class FormWorkLaborComponent implements OnInit {
  formFields: any = {
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
  };
  selectedClient = '';
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

  porcentaje: number | undefined;

  clients: any = [];

  PorcetajeGanacia: number | undefined;
  constructor(
    private calcService: CalcService,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((resp: any) => {
      if (resp.ok) {
        const { results } = resp;
        this.clients = results.Items;
        // console.log(this.clients);
      }
    });
  }

  calculate() {
    // console.log(this.formFields);
  }
}
