import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

// Imports de nuestra aplicación
import { ProdFont } from '../interfaces/prod-font'; // Nuestra interfaz de datos
import { ProdFontItemComponent } from '../components/prod-font-item/prod-font-item.component'; // El componente hijo
import { CommonModule } from '@angular/common'; // Módulo necesario para usar *ngIf y *ngFor


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
   // Al ser un componente standalone, debemos importar aquí todo lo que usemos en la plantilla
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, // Componentes de Ionic
    CommonModule // El módulo para las directivas
  ],
})
export class HomePage {
    // Esta es la lista de datos que mostraremos en la vista.
    // Es un array de objetos que deben cumplir la estructura de la interfaz ProdFont.
      listaDeProductosFont: ProdFont[] = [
    { id: 1, nombre: "Tuberia de Cobre", cantidad: 10 },
    { id: 2, nombre: "Tuberia de PVC", cantidad: 10 },
    { id: 3, nombre: "Tuberia Multicapa", cantidad: 10 },
    { id: 4, nombre: "Codo de Cobre", cantidad: 10 },
    { id: 5, nombre: "Codo de PVC", cantidad: 10 },
    { id: 6, nombre: "Llave de Paso", cantidad: 10 },
    { id: 7, nombre: "Grifo de Cocina", cantidad: 10 },
    { id: 8, nombre: "Grifo de Baño", cantidad: 10 },
    { id: 9, nombre: "Sifon de Lavabo", cantidad: 10 },
    { id: 10, nombre: "Sifon de Fregadero", cantidad: 10 },
    { id: 11, nombre: "Valvula de Desague", cantidad: 10 },
    { id: 12, nombre: "Junta de Goma", cantidad: 10 },
    { id: 13, nombre: "Cinta de Teflon", cantidad: 10 },
    { id: 14, nombre: "Latiguillo Flexible", cantidad: 10 },
    { id: 15, nombre: "Manguito de PVC", cantidad: 10 },
    { id: 16, nombre: "Tapon de PVC", cantidad: 10 },
    { id: 17, nombre: "Tuberia de Polietileno", cantidad: 10 },
    { id: 18, nombre: "Reductor de PVC", cantidad: 10 },
    { id: 19, nombre: "Te de PVC", cantidad: 10 },
    { id: 20, nombre: "Abrazadera para Tuberia", cantidad: 10 },
    { id: 21, nombre: "Vaso de Expansion", cantidad: 10 },
    { id: 22, nombre: "Valvula Antirretorno", cantidad: 10 },
    { id: 23, nombre: "Flexible de Ducha", cantidad: 10 },
    { id: 24, nombre: "Cabezal de Ducha", cantidad: 10 },
    { id: 25, nombre: "Flotador de Cisterna", cantidad: 10 },
    { id: 26, nombre: "Inodoro", cantidad: 10 },
    { id: 27, nombre: "Lavabo", cantidad: 10 },
    { id: 28, nombre: "Fregadero", cantidad: 10 },
    { id: 29, nombre: "Termo Electrico", cantidad: 10 },
    { id: 30, nombre: "Calentador de Agua", cantidad: 10 },
    { id: 31, nombre: "Bomba de Agua", cantidad: 10 },
    { id: 32, nombre: "Manometro", cantidad: 10 },
    { id: 33, nombre: "Valvula de Seguridad", cantidad: 10 },
    { id: 34, nombre: "Racor de Laton", cantidad: 10 },
    { id: 35, nombre: "Manguito de Cobre", cantidad: 10 },
    { id: 36, nombre: "Pegamento para PVC", cantidad: 10 },
    { id: 37, nombre: "Desatascador", cantidad: 10 },
    { id: 38, nombre: "Llave Inglesa", cantidad: 10 },
    { id: 39, nombre: "Junta de Silicona", cantidad: 10 },
    { id: 40, nombre: "Valvula de Esfera", cantidad: 10 },
    { id: 41, nombre: "Radiador", cantidad: 10 },
    { id: 42, nombre: "Termostato", cantidad: 10 },
    { id: 43, nombre: "Bote Sifonico", cantidad: 10 },
    { id: 44, nombre: "Arqueta de PVC", cantidad: 10 },
    { id: 45, nombre: "Sumidero de Suelo", cantidad: 10 },
    { id: 46, nombre: "Tubo Corrugado", cantidad: 10 },
    { id: 47, nombre: "Aireador para Grifo", cantidad: 10 },
    { id: 48, nombre: "Cartucho para Grifo", cantidad: 10 },
    { id: 49, nombre: "Llave de Escuadra", cantidad: 10 },
    { id: 50, nombre: "Desague de Ducha", cantidad: 10 }
];

  constructor() {}

}
