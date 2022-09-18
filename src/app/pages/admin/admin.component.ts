import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  editProduct(id: number) {
    console.log('editing' + id);
  }

  deleteProduct(id: number) {
    console.log('editing' + id);
  }

  editClient(id: number) {
    console.log(id);
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

  clients = [
    {
      id: 1,
      name: 'Jonh Doe',
      phone: '33000',
      email: 'testring@email.com',
      address: 'calle false 123',
    },
    {
      id: 1,
      name: 'Jonh Doe',
      phone: '33000',
      email: 'testring@email.com',
      address: 'calle false 123',
    },
  ];
}
