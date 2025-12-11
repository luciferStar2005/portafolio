import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  imports: [],
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.scss',
})
export class GaleriaComponent {
  fotos = [
    { src: '../../../assets/images/foto1.jpeg', titulo: 'Retrato 1' },
    { src: '../../../assets/images/foto2.jpeg', titulo: 'Retrato 2' },
    { src: '../../../assets/images/foto3.jpeg', titulo: 'Retrato 3' },
  ];
}
