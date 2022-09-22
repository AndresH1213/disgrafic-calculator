import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Client, listClients } from '../../interfaces/Client';
import { ClientsService } from '../../services/clients.service';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @ViewChild('clientForm') clientForm!: NgForm;
  @ViewChild('productForm') productForm!: NgForm;

  public displayModalProduct = false;
  public displayModalClient = false;

  public displayOptionsContainer = true;
  public displayProductsContainer = false;
  public displayClientsContainer = false;

  public showError = false;
  public isEdit = false;
  public image: any;

  public clients: Client[] = [];
  public products: Product[] = [];

  public selectedProduct?: Product;
  public selectedClient?: Client;

  productInitForm: Product = {
    name: '',
    label: '',
    price: 0,
    product_type: '',
    subtype: '',
    image_url: '',
  };

  clientInitForm: Client = {
    name: '',
    phone: '',
    email: '',
    address: '',
  };

  constructor(
    private productService: ProductsService,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {}

  showOptions() {
    this.displayClientsContainer = false;
    this.displayProductsContainer = false;
    this.displayOptionsContainer = true;
  }

  showProducts() {
    this.displayClientsContainer = false;
    this.displayOptionsContainer = false;
    this.displayProductsContainer = true;

    if (this.products.length === 0) {
      this.loadProducts();
    }
  }

  showClients() {
    this.displayProductsContainer = false;
    this.displayOptionsContainer = false;
    this.displayClientsContainer = true;

    if (this.clients.length === 0) {
      this.loadClients();
    }
  }

  editProduct(id: string) {
    this.selectedProduct = this.products.filter(
      (product) => product.product_id === id
    )[0];

    this.openProductModal(true);
    this.productInitForm = { ...this.selectedProduct };
  }

  deleteProduct(id: string) {
    if (confirm('En serio quieres eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe();
    }
  }

  editClient(id: string) {
    this.selectedClient = this.clients.filter(
      (client) => client.client_id === id
    )[0];
    this.openClientModal(true);
    this.clientInitForm = { ...this.selectedClient };
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
    if (!this.productForm.valid) {
      this.showError = true;
      setTimeout(() => (this.showError = false), 2500);
      return;
    }
    const { image_url, ...restForm } = this.productForm.value;
    console.log('image', image_url);
    // this.productService.createProduct(restForm).subscribe((resp) => {
    //   console.log(resp);
    //   alert('Has creado un nuevo producto');
    // });
  }

  changeImage(target: any) {
    console.log(target.files);
  }

  createClient() {
    if (!this.clientForm.valid) {
      this.showError = true;
      setTimeout(() => (this.showError = false), 2500);
      return;
    }

    this.clientsService
      .createClient(this.clientForm.value)
      .subscribe((resp) => {
        console.log(resp);
        alert('Has creado un nuevo cliente');
      });
  }

  updateClient() {
    const id = this.selectedClient?.client_id!;
    const attrs = this.clientForm.value;
    this.clientsService.updateClient(id, attrs).subscribe((resp) => {
      this.selectedClient = undefined;
      this.displayModalClient = false;
      this.isEdit = false;
      this.clientForm.reset();
      this.loadClients();
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe((resp: any) => {
      this.products = resp.products;
    });
  }

  loadClients() {
    this.clientsService.getClients().subscribe((resp: any) => {
      this.clients = resp.clients;
    });
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe((product: any) => {
      this.selectedProduct = product;
    });
  }

  getClient(id: string) {
    this.clientsService.getClient(id).subscribe((client: any) => {
      this.selectedClient = client;
    });
  }
}
