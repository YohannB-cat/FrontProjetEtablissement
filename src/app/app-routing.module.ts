import { NgModule, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllEtudiantComponent } from './content/etudiant/all-etudiant/all-etudiant.component';
import { CreateEtudiantComponent } from './content/etudiant/create-etudiant/create-etudiant.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AllMatiereComponent } from './content/matiere/all-matiere/all-matiere.component';
import { MatiereDetailComponent } from './content/matiere/matiere-detail/matiere-detail.component';
import { AllModuleComponent } from './content/module/all-module/all-module.component';
import { DetailModuleComponent } from './content/module/detail-module/detail-module.component';

const routes: Routes = [
  
  { path: '', component: DashboardComponent },
  { path: 'niveau', component: AppComponent },
  { path: 'classe', component: AppComponent},
  { path: 'module', component: AllModuleComponent},
  { path: 'matiere', component: AllMatiereComponent },
  { path: 'etudiant', component: AllEtudiantComponent },
  { path: 'etudiant/add', component: CreateEtudiantComponent },
  { path: 'examen', component: AppComponent },
  { path: 'note', component: AppComponent },
  { path: 'matiere/detail', component: MatiereDetailComponent },
  { path: 'module/detail', component : DetailModuleComponent}
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
