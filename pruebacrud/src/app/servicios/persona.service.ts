import { Injectable } from '@angular/core';
// Importamos la clase.
import { Persona } from '../modelo/persona';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  // Ahora llamaremos a nuestra clase persona.
  selectedPersona: Persona = new Persona();
  personaList: AngularFireList<any>;
  // Creamos una variable en el constructor para llamar a nuestra base de datos en firebase
  constructor(private firebase: AngularFireDatabase) {}
  // Creamos el metodo getPersona que se encargara de traer la información de la categoria persona desde la base de datos en firebase.
  getPersona() {
    return (this.personaList = this.firebase.list('persona'));
  }
  // metodo para insertar con parametros variable persona que llama la categoria
  // ...persona que llama la clase Persona, el metodo push inserta a nuestra base de datos.
  insertPersona(persona: Persona) {
    this.personaList.push({
      num_identificacion: persona.num_identificacion,
      nombre: persona.nombre,
      apellido: persona.apellido,
      telefono: persona.telefono,
      direccion: persona.direccion,
    });
  }
  // Creamos el metodo modificar

  updatePersona(persona: Persona) {
    this.personaList.update(persona.$keyregistro, {
      num_identificacion: persona.num_identificacion,
      nombre: persona.nombre,
      apellido: persona.apellido,
      telefono: persona.telefono,
      direccion: persona.direccion,
    });
  }
  // Creamos el metodo borrar

  deletePersona($keyregistro: string) {
    this.personaList.remove($keyregistro);
  }
}
