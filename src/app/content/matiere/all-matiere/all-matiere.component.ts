import { Component, OnInit } from '@angular/core';
import { MatiereCreateDto } from 'src/app/models/matiere-create-dto';
import { MatiereService } from 'src/app/services/mmatiere/matiere.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-all-matiere',
  templateUrl: './all-matiere.component.html',
  styleUrls: ['./all-matiere.component.css']
})
export class AllMatiereComponent implements OnInit {

  allMatieres = new Array<MatiereCreateDto>();
  messageValidation: string;
  messageEchec: string;
  matiereById = null;
  matiereCreate = new MatiereCreateDto();
  matiere = new MatiereCreateDto;

  addForm: FormGroup;

  constructor(private service: MatiereService) { }

  ngOnInit(): void {
    this.getAll();
    this.addForm = new FormGroup({
      'nom': new FormControl(this.matiereCreate.nom, Validators.required)
    })
  }


  get nom() { return this.addForm.get('nom'); }

  getAll() {
    this.service.getAll().subscribe(
      responseDto => {
        if (!responseDto.error) {
          this.allMatieres = responseDto.object;
        }
        else { this.allMatieres = [] }
      }
    );
  }

  getOne(id: number) {
    this.matiereById = null;
    this.service.getOne(id).subscribe(
      responseDto => {
        if (!responseDto.error) {
          this.matiereById = responseDto.object;
        }
      }
    );
  }



  create() {
    this.service.create(this.matiereCreate).subscribe(
      responseDto => {
        if (!responseDto.error) {
          this.messageValidation = 'Vous venez d\'ajouter la matière '+ this.matiereCreate.nom+' ! Recharger la page pour voir la liste à jour.';
        }
        else { this.messageEchec = 'Il y a un problème de saisi ! Veuillez recomencer'; }
      }
    )
  }



  delete(id: number) {
    console.log("DEBUG id = " +id);
    this.service.delete(id).subscribe(
      (responseDto) => {
          this.allMatieres = this.allMatieres.filter(
            e => e.id !== id
          );
          this.getAll();
      });
  }

  stockageMatiere(matiere : MatiereCreateDto) { 
    this.service.matiere = matiere ;
  }
  
}
