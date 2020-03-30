import { NgModule, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllEtudiantComponent } from './content/etudiant/all-etudiant/all-etudiant.component';
import { CreateEtudiantComponent } from './content/etudiant/create-etudiant/create-etudiant.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AllExamenComponent } from './content/examen/all-examen/all-examen.component';
import { CreateExamenComponent } from './content/examen/create-examen/create-examen.component';
import { DetailedExamenComponent } from './content/examen/detailed-examen/detailed-examen.component';
import { AllMatiereComponent } from './content/matiere/all-matiere/all-matiere.component';
import { MatiereDetailComponent } from './content/matiere/matiere-detail/matiere-detail.component';
import { AllModuleComponent } from './content/module/all-module/all-module.component';
import { DetailModuleComponent } from './content/module/detail-module/detail-module.component';
import { UpdateComponent } from './content/etudiant/update/update.component';
import { AllAbsenceComponent } from './content/absence/all-absence/all-absence.component';
import { CreateAbsenceComponent } from './content/absence/create-absence/create-absence.component';
import { UpdateAbsenceComponent } from './content/absence/update-absence/update-absence.component';
//import { AllClasseComponent } from '.content/classe/All-classe/AllClasseComponent';

const routes: Routes = [
  
  { path: '', component: DashboardComponent },
  //{ path: 'niveau', component: AppComponent },
  { path: 'classe', component: AppComponent},
  { path: 'module', component: AllModuleComponent},
  { path: 'matiere', component: AllMatiereComponent },
  { path: 'etudiant', component: AllEtudiantComponent },
  { path: 'etudiant/add', component: CreateEtudiantComponent },
  { path: 'etudiant/update', component : UpdateComponent},
  { path: 'examen', component:AllExamenComponent},
  { path: 'examen/add', component:CreateExamenComponent},
  { path: 'examen/detail', component:DetailedExamenComponent},
 // { path: 'note', component: AppComponent },
  { path: 'matiere/detail', component: MatiereDetailComponent },
  { path: 'module/detail', component : DetailModuleComponent},
  { path: 'absence', component: AllAbsenceComponent },
  { path: 'absence/add', component: CreateAbsenceComponent },
  { path: 'absence/update', component : UpdateAbsenceComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
