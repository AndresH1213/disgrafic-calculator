import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getProducts() {
    return [
      {
        image: 'agendas.PNG',
        alt: 'Imagen agenda personalizada',
        name: 'Agenda Personalizada',
        price: 5000,
      },
      {
        image: 'agendas2.PNG',
        alt: 'Imagen agenda personalizada',
        name: 'Agenda Personalizada',
        price: 5000,
      },
      {
        image: 'agendas3.PNG',
        alt: 'Imagen agenda personalizada',
        name: 'Agenda Personalizada',
        price: 5000,
      },
      {
        image: 'album-fotos.PNG',
        alt: 'Album de fotos personalizada',
        name: 'Album de fotos',
        price: 15000,
      },
      {
        image: 'boton-personalizado.PNG',
        alt: 'Imagen Boton personalizado',
        name: 'Boton personalizado',
        price: 2000,
      },
      {
        image: 'boton-personalizado2.PNG',
        alt: 'Imagen Boton personalizado',
        name: 'Boton personalizado',
        price: 2000,
      },
      {
        image: 'camisas-personalizadas.PNG',
        alt: 'Imagen Camisas Personalizadas',
        name: 'Camisas Personalizadas',
        price: 35000,
      },
      {
        image: 'camisas-personalizadas2.PNG',
        alt: 'Imagen Camisas Personalizadas',
        name: 'Camisas Personalizadas',
        price: 35000,
      },
      {
        image: 'cojines.PNG',
        alt: 'Imagen Cojines',
        name: 'Cojines',
        price: 35000,
      },
      {
        image: 'cojines2.PNG',
        alt: 'Imagen Cojines',
        name: 'Cojines',
        price: 35000,
      },
      {
        image: 'cojines3.PNG',
        alt: 'Imagen Cojin',
        name: 'Cojines Personalizados',
        price: 35000,
      },
      {
        image: 'cuadros.PNG',
        alt: 'Imagen Cuadros',
        name: 'Cuadros',
        price: 15000,
      },
      {
        image: 'lapiceros.PNG',
        alt: 'Imagen Lapiceros personalizados',
        name: 'Lapiceros Personalizados',
        price: 1500,
      },
      {
        image: 'lapiceros2.PNG',
        alt: 'Imagen Lapiceros personalizados',
        name: 'Lapiceros Personalizados',
        price: 1500,
      },
      {
        image: 'llaveros.PNG',
        alt: 'Imagen llaveros',
        name: 'Llaveros',
        price: 3500,
      },
      {
        image: 'llaveros2.PNG',
        alt: 'Imagen llaveros',
        name: 'Llaveros',
        price: 3500,
      },
      {
        image: 'mug-personalizado.PNG',
        alt: 'Imagen mug-personalizado',
        name: 'mug-personalizado',
        price: 12000,
      },
      {
        image: 'mug-personalizado2.PNG',
        alt: 'Imagen Mug Personalizado',
        name: 'Mug Personalizado',
        price: 12000,
      },
    ];
  }
}
