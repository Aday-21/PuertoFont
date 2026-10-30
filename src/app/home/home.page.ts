import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular';

// Imports de nuestra aplicación
import { ProdFont } from '../interfaces/prod-font'; // Nuestra interfaz de datos
import { ProdFontItemComponent } from '../components/prod-font-item/prod-font-item.component'; // El componente hijo
import { CommonModule } from '@angular/common'; // Módulo necesario para usar *ngIf y *ngFor
import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular';

import { RouterLink } from '@angular/router';
import {  IonList, IonItem, IonInput, IonButtons, IonIcon } from '@ionic/angular'; 
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
   // Al ser un componente standalone, debemos importar aquí todo lo que usemos en la plantilla
   // 2. Y los registramos también en el array de imports del componente
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, // Componentes de Ionic
    ProdFontItemComponent,
    CommonModule, IonGrid, IonRow, IonCol, IonButton, // El módulo para las directivas
    RouterLink,
    IonButtons, // Necesario para agrupar botones en la barra de herramientas
    IonIcon     // Necesario para mostrar iconos vectoriales 
    
],
  
})
export class HomePage {
    // Esta es la lista de datos que mostraremos en la vista.
    // Es un array de objetos que deben cumplir la estructura de la interfaz ProdFont.
      listaDeProductosFont: ProdFont[] = [
    { id: 1, nombre: "Tuberia de Cobre", cantidad: 10, imagen: "https://picsum.photos/seed/84/200/200" },
  { id: 2, nombre: "Tuberia de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/85/200/200" },
  { id: 3, nombre: "Tuberia Multicapa", cantidad: 10, imagen: "https://picsum.photos/seed/86/200/200" },
  { id: 4, nombre: "Codo de Cobre", cantidad: 10, imagen: "https://picsum.photos/seed/87/200/200" },
  { id: 5, nombre: "Codo de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/88/200/200" },
  { id: 6, nombre: "Llave de Paso", cantidad: 10, imagen: "https://picsum.photos/seed/89/200/200" },
  { id: 7, nombre: "Grifo de Cocina", cantidad: 10, imagen: "https://picsum.photos/seed/90/200/200" },
  { id: 8, nombre: "Grifo de Baño", cantidad: 10, imagen: "https://picsum.photos/seed/91/200/200" },
  { id: 9, nombre: "Sifon de Lavabo", cantidad: 10, imagen: "https://picsum.photos/seed/92/200/200" },
  { id: 10, nombre: "Sifon de Fregadero", cantidad: 10, imagen: "https://picsum.photos/seed/93/200/200" },
  { id: 11, nombre: "Valvula de Desague", cantidad: 10, imagen: "https://picsum.photos/seed/94/200/200" },
  { id: 12, nombre: "Junta de Goma", cantidad: 10, imagen: "https://picsum.photos/seed/95/200/200" },
  { id: 13, nombre: "Cinta de Teflon", cantidad: 10, imagen: "https://picsum.photos/seed/96/200/200" },
  { id: 14, nombre: "Latiguillo Flexible", cantidad: 10, imagen: "https://picsum.photos/seed/97/200/200" },
  { id: 15, nombre: "Manguito de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/98/200/200" },
  { id: 16, nombre: "Tapon de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/99/200/200" },
  { id: 17, nombre: "Tuberia de Polietileno", cantidad: 10, imagen: "https://picsum.photos/seed/100/200/200" },
  { id: 18, nombre: "Reductor de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/101/200/200" },
  { id: 19, nombre: "Te de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/102/200/200" },
  { id: 20, nombre: "Abrazadera para Tuberia", cantidad: 10, imagen: "https://picsum.photos/seed/103/200/200" },
  { id: 21, nombre: "Vaso de Expansion", cantidad: 10, imagen: "https://picsum.photos/seed/104/200/200" },
  { id: 22, nombre: "Valvula Antirretorno", cantidad: 10, imagen: "https://picsum.photos/seed/105/200/200" },
  { id: 23, nombre: "Flexible de Ducha", cantidad: 10, imagen: "https://picsum.photos/seed/106/200/200" },
  { id: 24, nombre: "Cabezal de Ducha", cantidad: 10, imagen: "https://picsum.photos/seed/107/200/200" },
  { id: 25, nombre: "Flotador de Cisterna", cantidad: 10, imagen: "https://picsum.photos/seed/108/200/200" },
  { id: 26, nombre: "Inodoro", cantidad: 10, imagen: "https://picsum.photos/seed/109/200/200" },
  { id: 27, nombre: "Lavabo", cantidad: 10, imagen: "https://picsum.photos/seed/110/200/200" },
  { id: 28, nombre: "Fregadero", cantidad: 10, imagen: "https://picsum.photos/seed/111/200/200" },
  { id: 29, nombre: "Termo Electrico", cantidad: 10, imagen: "https://picsum.photos/seed/112/200/200" },
  { id: 30, nombre: "Calentador de Agua", cantidad: 10, imagen: "https://picsum.photos/seed/113/200/200" },
  { id: 31, nombre: "Bomba de Agua", cantidad: 10, imagen: "https://picsum.photos/seed/114/200/200" },
  { id: 32, nombre: "Manometro", cantidad: 10, imagen: "https://picsum.photos/seed/115/200/200" },
  { id: 33, nombre: "Valvula de Seguridad", cantidad: 10, imagen: "https://picsum.photos/seed/116/200/200" },
  { id: 34, nombre: "Racor de Laton", cantidad: 10, imagen: "https://picsum.photos/seed/117/200/200" },
  { id: 35, nombre: "Manguito de Cobre", cantidad: 10, imagen: "https://picsum.photos/seed/118/200/200" },
  { id: 36, nombre: "Pegamento para PVC", cantidad: 10, imagen: "https://picsum.photos/seed/119/200/200" },
  { id: 37, nombre: "Desatascador", cantidad: 10, imagen: "https://picsum.photos/seed/120/200/200" },
  { id: 38, nombre: "Llave Inglesa", cantidad: 10, imagen: "https://picsum.photos/seed/121/200/200" },
  { id: 39, nombre: "Junta de Silicona", cantidad: 10, imagen: "https://picsum.photos/seed/122/200/200" },
  { id: 40, nombre: "Valvula de Esfera", cantidad: 10, imagen: "https://picsum.photos/seed/123/200/200" },
  { id: 41, nombre: "Radiador", cantidad: 10, imagen: "https://picsum.photos/seed/124/200/200" },
  { id: 42, nombre: "Termostato", cantidad: 10, imagen: "https://picsum.photos/seed/125/200/200" },
  { id: 43, nombre: "Bote Sifonico", cantidad: 10, imagen: "https://picsum.photos/seed/126/200/200" },
  { id: 44, nombre: "Arqueta de PVC", cantidad: 10, imagen: "https://picsum.photos/seed/127/200/200" },
  { id: 45, nombre: "Sumidero de Suelo", cantidad: 10, imagen: "https://picsum.photos/seed/128/200/200" },
  { id: 46, nombre: "Tubo Corrugado", cantidad: 10, imagen: "https://picsum.photos/seed/129/200/200" },
  { id: 47, nombre: "Aireador para Grifo", cantidad: 10, imagen: "https://picsum.photos/seed/130/200/200" },
  { id: 48, nombre: "Cartucho para Grifo", cantidad: 10, imagen: "https://picsum.photos/seed/131/200/200" },
  { id: 49, nombre: "Llave de Escuadra", cantidad: 10, imagen: "https://picsum.photos/seed/132/200/200" },
  { id: 50, nombre: "Desague de Ducha", cantidad: 10, imagen: "https://picsum.photos/seed/133/200/200" }
];

  constructor(){
    // Registramos el icono de ajustes que vamos a usar en la vista
    addIcons({ settingsOutline });
  }
}
