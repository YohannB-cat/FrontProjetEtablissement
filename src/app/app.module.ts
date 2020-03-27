import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllEtudiantComponent } from './content/etudiant/all-etudiant/all-etudiant.component';
import { CreateEtudiantComponent } from './content/etudiant/create-etudiant/create-etudiant.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ExamenComponent } from './content/examen/examen.component';
import { AllMatiereComponent } from './matiere/all-matiere/all-matiere.component';
import { MatiereDetailComponent } from './matiere/matiere-detail/matiere-detail.component';
import { ContentniveauComponent } from './app/contentniveau/contentniveau.component';
import { AllNiveauComponent } from './content/niveau/all-niveau/all-niveau.component';
import { CreateNiveauComponent } from './content/niveau/create-niveau/create-niveau.component';
import { AllClasseComponent } from './content/classe/all-classe/all-classe.component';
import { CreateClasseComponent } from './content/classe/create-classe/create-classe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    NavBarComponent,
    AllEtudiantComponent,
    CreateEtudiantComponent,
    DashboardComponent,
    ExamenComponent,
    AllMatiereComponent,
    MatiereDetailComponent,
    ContentniveauComponent,
    AllNiveauComponent,
    CreateNiveauComponent,
    AllClasseComponent,
    CreateClasseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
