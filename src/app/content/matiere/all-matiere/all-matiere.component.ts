import { Component, OnInit } from '@angular/core';
import { MatiereCreateDto } from 'src/app/models/matiere-create-dto';
import { MatiereService } from 'src/app/services/mmatiere/matiere.service';



@Component({
  selector: 'app-all-matiere',
  templateUrl: './all-matiere.component.html',
  styleUrls: ['./all-matiere.component.css']
})
export class AllMatiereComponent implements OnInit {

  allMatieres = new Array<MatiereCreateDto>();
  messageValidation: string;
  messageEchec: string;
  matiereById = new MatiereCreateDto();
  matiereCreate = new MatiereCreateDto();

  constructor(private service: MatiereService) { }

  ngOnInit(): void {
    this.getAll();
  }

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
          this.messageValidation = 'Vous venez d\'ajouter une matirèe ! Recharger la page pour voir la liste à jour.';
        }
        else { this.messageEchec = 'Il y a un problème de saisi ! Veuillez recomencer'; }
      }
    )
  }



  delete(id: number) {
    this.service.delete(id).subscribe(
      (responseDto) => {
        if (!responseDto.error) {
          this.allMatieres = this.allMatieres.filter(
            e => e.id !== id
          );
        }
      });
  }

}
