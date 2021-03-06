import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DireccionComponent } from './direccion/direccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DireccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
