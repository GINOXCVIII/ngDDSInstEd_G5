import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocenteAddComponent } from './components/docente-add/docente-add.component';
import { DocenteListComponent } from './components/docente-list/docente-list.component';
import { DocenteDetailsComponent } from './components/docente-details/docente-details.component';
import { CategoriaAddComponent } from './components/categoria-add/categoria-add.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { CategoriaDetailsComponent } from './components/categoria-details/categoria-details.component';
import { ProfesorAddComponent } from './components/profesor-add/profesor-add.component';
import { ProfesorListComponent } from './components/profesor-list/profesor-list.component';
import { ProfesorDetailsComponent } from './components/profesor-details/profesor-details.component';
import { SocioAddComponent } from './components/socio-add/socio-add.component';
import { SocioListComponent } from './components/socio-list/socio-list.component';
import { SocioDetailsComponent } from './components/socio-details/socio-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DocenteAddComponent,
    DocenteListComponent,
    DocenteDetailsComponent,
    CategoriaAddComponent,
    CategoriaListComponent,
    CategoriaDetailsComponent,
    ProfesorAddComponent,
    ProfesorListComponent,
    ProfesorDetailsComponent,
    SocioAddComponent,
    SocioListComponent,
    SocioDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
