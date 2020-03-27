import { NgModule, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllEtudiantComponent } from './content/etudiant/all-etudiant/all-etudiant.component';
import { CreateEtudiantComponent } from './content/etudiant/create-etudiant/create-etudiant.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { Matiere } from './models/matiere';
import { Module } from './models/module';

const routes: Routes = [
  
  { path: '', component: DashboardComponent },
  { path: 'niveau', component: AppComponent },
  { path: 'classe', component: AppComponent},
  { path: 'module', component: Module},
  { path: 'matiere', component: Matiere },
  { path: 'etudiant', component: AllEtudiantComponent },
  { path: 'etudiant/add', component: CreateEtudiantComponent },
  { path: 'examen', component: AppComponent },
  { path: 'note', component: AppComponent },
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
