import { Component, OnInit } from '@angular/core';
// Importamos la clase persona asi mismo el servicio
import { Persona } from '../../modelo/persona';
import { PersonaService } from '../../servicios/persona.service';
// este es un plus que es sweetalet2 instalada con npm install sweetalert2 e importada segun su documentacion como viene
import Swal from 'sweetalert2';
// importamos ngform
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  //  A continuación creamos un arreglo vacio de Persona ya que este se recibira de la inyección del servicio
  personaList: Persona[];

  // inyectamos el servicio para llamar a nuestro servicio
  constructor(public personaService: PersonaService) {}

  ngOnInit() {}

  // Creamos el método insertar.

  onSubmit(personaForm: NgForm) {
    this.personaService.getPersona();

    if (personaForm.value.$keyRegistro == null) {
      this.personaService.insertPersona(personaForm.value);
      // Swal.fire({
      //   position: 'top-end',
      //   type: 'success',
      //   title: 'Creado con exito!',
      //   showConfirmButton: false,
      //   timer: 1500
      // });
    } else {
      this.personaService.updatePersona(personaForm.value);
      // Swal.fire({
      //   position: 'top-end',
      //   type: 'success',
      //   title: 'Modificado con exito!',
      //   showConfirmButton: false,
      //   timer: 1500
      // });
    }
  }
}
