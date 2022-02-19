import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
    `
      .pages-body {
        height: 60vh;
      }
    `,
  ],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
