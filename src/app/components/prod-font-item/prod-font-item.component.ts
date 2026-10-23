import { Component, Input, OnInit } from '@angular/core';
import { ProdFont } from '../../interfaces/prod-font';
// 1. Importamos los componentes de Ionic que usaremos en el HTML
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton, IonThumbnail } from '@ionic/angular';
// 2. Importamos CommonModule para poder usar directivas como [class.tachado]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-font-item',
  templateUrl: './prod-font-item.component.html',
  styleUrls: ['./prod-font-item.component.scss'],
  standalone: true,
  imports: [IonCard, IonItem, IonCheckbox, IonLabel, IonButton, IonThumbnail],
})
export class ProdFontItemComponent {

  @Input() prod_font!: ProdFont;

  constructor() { }

  mostrarDetalles() {
    console.log('Datos de los productos:', this.prod_font);
  }

}
