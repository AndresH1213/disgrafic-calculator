import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CalcService } from '../../services/calc.service';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { MaterialStructured, Size } from '../../interfaces/Calculator';
import { FormObject } from 'src/app/interfaces/Forms';
import { Client } from 'src/app/interfaces/Client';
import { ClientsService } from 'src/app/services/clients.service';

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

  pliegosCant?: number;
  planchasSelected?: string;
  planchasCant?: number;
  papelSelected?: string;
  papelTamano?: number;
  papelTamanosCant: number = 0;
  maquinaSelected?: string;
  maquinaCant?: number;

  sizes: Size[] = [];

  pappersType: Product[] = [];
  pappersStructured: MaterialStructured[] = [];
  planchasType: Product[] = [];
  planchasStructured: MaterialStructured[] = [];
  machineType: Product[] = [];
  machineStructured: MaterialStructured[] = [];

  clients: Client[] = [];
  selectedClient = '';

  constructor(
    private calcService: CalcService,
    private clientsService: ClientsService,
    private productsService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.retrieveMaterials();
    this.sizes = this.calcService.getSizes();
    this.loadClients();
  }
  loadClients() {
    this.clientsService.getClients().subscribe((resp: any) => {
      const { clients } = resp;
      this.clients = clients;
    });
  }

  // [{productId: v4(), type, subtype, name, label, price}]
  retrieveMaterials() {
    this.productsService.getProducts('material').subscribe((resp: any) => {
      const { products } = resp as { products: Product[] };
      for (let item of products) {
        if (item.product_type === 'Papel') {
          this.pappersType.push(item);
        } else if (item.product_type === 'Plancha') {
          this.planchasType.push(item);
        } else {
          this.machineType.push(item);
        }
      }
      this.structureToCascadeSelect(this.pappersType, this.pappersStructured);
      this.structureToCascadeSelect(this.machineType, this.machineStructured);
      this.structureToCascadeSelect(this.planchasType, this.planchasStructured);
    });
  }

  structureToCascadeSelect(
    collection: Product[],
    arrayStrutured: MaterialStructured[]
  ) {
    let subtypesArr = collection
      .map((object) => object.subtype.trim())
      .filter((value: string, index: number, self: string[]) => {
        return self.indexOf(value) === index;
      });

    for (let subtype of subtypesArr) {
      let objectStructured: MaterialStructured = {
        subtype,
        materials: [],
      };
      if (subtype === '') {
        objectStructured.subtype = 'varios';
      }
      objectStructured.materials = collection
        .filter((object: any) => object.subtype.trim() === subtype)
        .map((object: any) => {
          return {
            product_id: object.product_id,
            label: object.label,
            name: object.name,
          };
        });
      arrayStrutured.push(objectStructured);
    }
    console.log(arrayStrutured);
  }

  showResponsiveDialog() {
    this.showModal = !this.showModal;
  }

  calculate() {
    if (!this.checkValues()) {
      console.log('invalue');
      return;
    }

    let formObject: FormObject = {
      plates: {
        id: this.planchasSelected!,
        quantity: this.planchasCant!,
      },
      papper: {
        id: this.papelSelected!,
        size: this.papelTamano!.toString(),
        quantity: this.pliegosCant!,
      },
      machine: {
        id: this.maquinaSelected!,
        quantity: this.maquinaCant!,
      },
      handwork: 0,
      gain_percentage: 0,
    };
    console.log(formObject);
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
    let papelObj = this.pappersType.find(
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
