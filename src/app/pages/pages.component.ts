import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
    `
      body {
        margin-top: 80px;
      }
    `,
  ],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
