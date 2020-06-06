import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { PersonalistComponent } from './component/personalist/personalist.component';

// Importando firedependencies
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// importando forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, PersonaComponent, PersonalistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos los modulos firebase
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // Importamos forms
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
