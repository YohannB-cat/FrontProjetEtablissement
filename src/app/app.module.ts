import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllEtudiantComponent } from './content/etudiant/all-etudiant/all-etudiant.component';
import { CreateEtudiantComponent } from './content/etudiant/create-etudiant/create-etudiant.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AllExamenComponent } from './content/examen/all-examen/all-examen.component';
import { CreateExamenComponent } from './content/examen/create-examen/create-examen.component';
import { DetailedExamenComponent } from './content/examen/detailed-examen/detailed-examen.component';
import { AllNiveauComponent } from './content/niveau/all-niveau/all-niveau.component';
import { CreateNiveauComponent } from './content/niveau/create-niveau/create-niveau.component';
import { AllClasseComponent } from './content/classe/all-classe/all-classe.component';
import { CreateClasseComponent } from './content/classe/create-classe/create-classe.component';
import { AllMatiereComponent } from './content/matiere/all-matiere/all-matiere.component';
import { MatiereDetailComponent } from './content/matiere/matiere-detail/matiere-detail.component';
import { AllModuleComponent } from './content/module/all-module/all-module.component';
import { DetailModuleComponent } from './content/module/detail-module/detail-module.component';
import { UpdateComponent } from './content/etudiant/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    NavBarComponent,
    AllEtudiantComponent,
    CreateEtudiantComponent,
    DashboardComponent,
    AllMatiereComponent,
    MatiereDetailComponent,
    AllExamenComponent,
    CreateExamenComponent,
    DetailedExamenComponent,
    AllNiveauComponent,
    CreateNiveauComponent,
    AllClasseComponent,
    CreateClasseComponent,
    AllModuleComponent,
    DetailModuleComponent,
    UpdateComponent,
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
