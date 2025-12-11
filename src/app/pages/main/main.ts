import { Component } from '@angular/core';
import { Email } from '../../services/email';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  isModalOpen=false;

  constructor(private emailService: Email) {}

  enviarFormulario() {

    const subject = `Nuevo mensaje de ${this.nombre}`;
    const message = `
      Nombre: ${this.nombre}
      Email: ${this.email}
      Mensaje: ${this.mensaje}
    `;

    this.emailService.sendEmail('ortizcalet2@gmail.com', subject, message)
      .subscribe({
        next: (res: any) => {
          alert('Mensaje enviado correctamente');
        },
        error: (err:any) => {
          alert('Error al enviar el mensaje');
          console.error(err);
        }
      });
  }
   fotos = [
    { src: '../../../assets/images/foto1.jpeg', titulo: 'Retrato 1' },
    { src: '../../../assets/images/foto2.jpeg', titulo: 'Retrato 2' },
    { src: '../../../assets/images/foto3.jpeg', titulo: 'Retrato 3' },
  ];
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
