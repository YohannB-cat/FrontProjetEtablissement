import { Component, OnInit } from '@angular/core';
import { EtudiantCreateDto } from 'src/app/models/etudiant-create-dto';
import { EtudiantsService } from 'src/app/services/etudiant/etudiants.service';

@Component({
  selector: 'app-all-etudiant',
  templateUrl: './all-etudiant.component.html',
  styleUrls: ['./all-etudiant.component.css']
})
export class AllEtudiantComponent implements OnInit {

  allEtudiant = new Array<EtudiantCreateDto>();

  etudiant : EtudiantCreateDto;

  messageErreur = '';

  constructor(private service: EtudiantsService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.messageErreur='';
    this.service.getAll().subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allEtudiant = responseDto.object;
        }
      }
    );
  }

  delete(id: number) {
    this.messageErreur='';
    this.service.delete(id).subscribe(
      responseDto => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allEtudiant = this.allEtudiant.filter(
            element => element.id !== id
          );
        }
        console.log('result after delete: ', this.allEtudiant);
      }
    );
  }

  search(id: number) {
    this.messageErreur='';
    this.service.getId(id).subscribe(responseDto => {
      console.log('debug responseDto : ', responseDto);
      if (!responseDto.error) {
        this.etudiant = responseDto.object;
      } else{
        console.log('debug erreur responseDto : ', responseDto);
        this.messageErreur= 'uvbjh';
        // this.messageErreur= "Il n'y a pas d'étudiants avec l'identifiant "+id;
      }
      
    }
    );
  }

}
