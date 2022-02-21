import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../services/calc.service';

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
      precio: 0,
    },
    papel: {
      clase: '',
      tamano: '',
      cant: 0,
      precio: 0,
    },
    maquina: {
      tipo: '',
      cant: 0,
      precio: 0,
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

  sizes = [
    { label: 'No aplica', divider: 1 },
    { label: '17.5x12.5 cms (1/32)', divider: 32 },
    { label: '20x14 cms (1/25)', divider: 25 },
    { label: '22x14 cms (1/22)', divider: 22 },
    { label: '25x14 cms (1/20)', divider: 20 },
    { label: '23x16.5 cms (1/18)', divider: 18 },
    { label: '25x17.5 cms (1/16)', divider: 16 },
    { label: '20x23 cms (1/15)', divider: 15 },
    { label: '25x23 cms (1/12)', divider: 12 },
    { label: '30x20 cms (1/11)', divider: 11 },
    { label: '22x28 cms (1/10)', divider: 10 },
    { label: '23x33 cms (1/9)', divider: 9 },
    { label: '25x35 cms (1/8)', divider: 8 },
    { label: '35x33 cms (1/6)', divider: 6 },
    { label: '48x28 cms (1/5)', divider: 5 },
    { label: '50x35 cms (1/4)', divider: 4 },
    { label: '70x33 cms (1/3)', divider: 3 },
    { label: '70x50 cms (1/2)', divider: 2 },
    { label: '70x100 cms (1)', divider: 1 },
  ];

  clients: any = [];
  papersType: any = [];
  papersStructured: any = [];
  planchasType: any = [];
  planchasStructured: any = [];
  machineType: any = [];
  machineStructured: any = [];

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
  PorcetajeGanacia: number | undefined;
  constructor(private calcService: CalcService) {}

  ngOnInit(): void {
    this.calcService.getClients().subscribe((resp: any) => {
      if (resp.ok) {
        const { results } = resp;
        this.clients = results.Items;
        console.log(this.clients);
      }
    });
    this.calcService.getMaterials().subscribe((resp: any) => {
      if (resp.ok) {
        const { results } = resp;

        for (let item of results.Items) {
          if (item.type === 'papel') {
            this.papersType.push(item);
          } else if (item.type === 'plancha') {
            this.planchasType.push(item);
          } else {
            this.machineType.push(item);
          }
        }
        this.structureToCascadeSelect(this.papersType, this.papersStructured);
        this.structureToCascadeSelect(this.machineType, this.machineStructured);
        this.structureToCascadeSelect(
          this.planchasType,
          this.planchasStructured
        );
      }
    });
  }

  structureToCascadeSelect(collection: any, arrayStrutured: any) {
    let subtypesArr = collection
      .map((object: any) => object.subtype)
      .filter((value: string, index: number, self: any) => {
        return self.indexOf(value) === index;
      });

    for (let subtype of subtypesArr) {
      let objectStructured = {
        subtype,
        materials: [],
      };
      if (subtype === '') {
        objectStructured.subtype = 'varios';
      }
      objectStructured.materials = collection
        .filter((object: any) => object.subtype === subtype)
        .map((object: any) => {
          return {
            label: object.label,
            name: object.name,
            price: object.price,
          };
        });
      arrayStrutured.push(objectStructured);
    }
  }

  calculate() {
    console.log(this.formFields);
  }
}
