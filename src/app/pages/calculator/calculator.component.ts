import { Component, OnInit } from '@angular/core';
import { FormObject } from 'src/app/models/Form';
import Swal from 'sweetalert2';
import { CalcService } from '../../services/calc.service';
import { AuthService } from '../../services/auth.service';

interface InputEvent {
  originalEvent: PointerEvent;
  value: number | string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  showModal = true;
  isResmilla = false;
  showWork = false;

  pliegosCant: number | undefined;
  planchasSelected: string | undefined;
  planchasCant: number | undefined;
  papelSelected: string | undefined;
  papelTamano: number | undefined;
  papelTamanosCant: number = 0;
  maquinaSelected: string | undefined;
  maquinaCant: number | undefined;

  sizes: any[] = [];

  papersType: any = [];
  papersStructured: any = [];
  planchasType: any = [];
  planchasStructured: any = [];
  machineType: any = [];
  machineStructured: any = [];

  constructor(
    private calcService: CalcService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.retrieveMaterials();
    this.sizes = this.calcService.getSizes();
  }

  retrieveMaterials() {
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
            prodId: object.productId,
            label: object.label,
            name: object.name,
          };
        });
      arrayStrutured.push(objectStructured);
    }
  }

  showResponsiveDialog() {
    this.showModal = !this.showModal;
  }

  calculate() {
    if (!this.checkValues()) {
      return;
    }
    let formObject: FormObject = {
      plates: {
        prodId: this.planchasSelected!,
        cant: this.planchasCant!,
      },
      papper: {
        prodId: this.papelSelected!,
        cant: this.pliegosCant!,
      },
      sizes: {
        size: this.papelTamano!,
        cant: this.pliegosCant!,
      },
      machine: {
        prodId: this.maquinaSelected!,
        cant: this.maquinaCant!,
      },
    };
    this.calcService.calculate(formObject).subscribe((resp: any) => {
      if (resp.ok) {
        let currency = Intl.NumberFormat('en-US');
        let result = `<strong>$${currency.format(resp.result)} COP</strong>`;
        Swal.fire(
          'Calculado',
          `El trabajo tiene un valor aproximado de ${result}, el valor puede variar dependiendo de la mano de obra que necesite tu trabajo, para mayor informacion comunicate`,
          'success'
        );
      }
    });
  }

  setSizes(event: InputEvent) {
    if (!this.pliegosCant) {
      Swal.fire(
        'Cantidad de pliegos?',
        'Se necesita conocer la cantidad de pliegos. Por favor pon cuantos pliegos o unidades requieres en tu trabajo',
        'info'
      );
      setTimeout(() => {
        this.papelTamano = 0;
      }, 0);

      return;
    }

    let sizeDivider = +event.value || 1;

    this.papelTamanosCant = this.pliegosCant / sizeDivider;
  }

  papelType(event: InputEvent) {
    let papelObj = this.papersType.find(
      (papper: any) => papper.productId === event.value
    );
    this.isResmilla = false;
    if (papelObj?.subtype === 'resmilla') {
      this.isResmilla = true;
      this.papelTamano = 0;
      let unidades = this.pliegosCant || 1;
      this.papelTamanosCant = unidades / 500;
    }
  }

  setPliegos(event: any) {
    let number = Number(event.target.value);
    if (!this.papelTamano) {
      this.papelTamanosCant = this.isResmilla ? number / 500 : 0;
      return;
    }
    this.papelTamanosCant = number / this.papelTamano;
  }

  showWorkForm(event: MouseEvent) {
    if (!this.authService.token) {
      Swal.fire({
        title: 'Requieres autorización ¿tienes alguna clave para seguir?',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: (token) => {
          // this.authService.validateToken(token).toPromise();
          return { confirm: true, user: 'andres' };
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result: any) => {
        console.log(result);
        if (result.value?.confirm) {
          Swal.fire({
            title: `Hola ${result.value.user}`,
          });

          this.showWork = true;
        } else if (result.isConfirmed) {
          Swal.fire(
            'Está bien el código?',
            'No pudimos confirmar el token ingresado',
            'info'
          );
          this.showWork = false;
        } else {
          this.showWork = false;
        }
      });
    }
    this.showWork = false;
  }

  checkValues(): boolean {
    if (
      !this.papelSelected ||
      !this.maquinaSelected ||
      !this.planchasSelected
    ) {
      Swal.fire(
        'Campos Faltantes',
        'Por favor complete todos los campos',
        'error'
      );
      return false;
    }
    if (
      !this.planchasCant ||
      this.planchasCant < 1 ||
      !this.maquinaCant ||
      this.maquinaCant < 1 ||
      !this.pliegosCant ||
      this.pliegosCant < 1
    ) {
      Swal.fire(
        'Cant erronea',
        'Las cantidades no pueden ser menor a 0',
        'error'
      );
      return false;
    }
    return true;
  }
}
