import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraComponent,
    FooterComponent
  ]
})
export class ComponentesModule { }
