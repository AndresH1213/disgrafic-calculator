import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Client } from '../../interfaces/Client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public displayModalProduct = false;
  public displayModalClient = false;

  public displayOptionsContainer = true;
  public displayProductsContainer = false;
  public displayClientsContainer = false;

  public showError = false;
  public isEdit = false;
  public image: any;

  public clients: Client[] = [];
  // public products: Product[] = [];

  public selectedProduct?: Product;
  public selectedClient?: Client;

  productName = '';
  productLabel = '';
  productPrice = 0;
  productImage = '';

  clientName = '';
  clientPhone = '';
  clientEmail = '';
  clientAddress = '';

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {}

  editProduct(id: number) {
    this.openProductModal(true);
  }

  deleteProduct(id: number) {
    console.log('editing' + id);
  }

  editClient(id: number) {
    this.openClientModal(true);
  }

  products = [
    {
      id: 1,
      name: 'best product',
      product_type: 'top level',
      subtype: 'something',
      price: 10000,
    },
    {
      id: 2,
      name: 'best product',
      img: true,
      product_type: 'top level',
      subtype: 'something',
      price: 10000,
    },
    {
      id: 3,
      name: 'best product',
      product_type: 'top level',
      subtype: 'something',
      price: 10000,
    },
    {
      id: 4,
      name: 'best product',
      product_type: 'top level',
      subtype: 'something',
      price: 10000,
    },
  ];

  showOptions() {
    this.displayClientsContainer = false;
    this.displayProductsContainer = false;
    this.displayOptionsContainer = true;
  }

  showProducts() {
    this.displayClientsContainer = false;
    this.displayOptionsContainer = false;
    this.displayProductsContainer = true;
  }

  showClients() {
    this.displayProductsContainer = false;
    this.displayOptionsContainer = false;
    this.displayClientsContainer = true;

    if (this.clients.length === 0) {
      this.clientsService.getClients().subscribe((resp: any) => {
        this.clients = resp.clients;
      });
    }
  }

  openProductModal(isEdit?: boolean) {
    this.isEdit = isEdit || false;
    this.displayModalProduct = true;
  }

  openClientModal(isEdit?: boolean) {
    this.isEdit = isEdit || false;
    this.displayModalClient = true;
  }

  createProduct() {
    this.displayModalProduct = false;
  }

  createClient() {
    this.displayModalClient = false;
  }
}
