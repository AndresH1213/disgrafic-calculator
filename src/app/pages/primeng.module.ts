import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    CascadeSelectModule,
    DialogModule,
    InputNumberModule,
    CarouselModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    CascadeSelectModule,
    DialogModule,
    InputNumberModule,
    CarouselModule,
  ],
})
export class PrimengModule {}
