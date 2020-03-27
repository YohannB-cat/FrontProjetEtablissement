import { Component, OnInit } from '@angular/core';
import { EtudiantCreateDto } from 'src/app/models/etudiant-create-dto';
import { EtudiantsService } from 'src/app/services/etudiant/etudiants.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service: EtudiantsService) { }
  etudiant : Etudiant;
  messageValidation ='';

  ngOnInit() {
    this.getEtudiant();
  }

  getEtudiant():void{
    this.etudiant = this.service.etudiant;
  }

  update():void{
    this.service.update(this.etudiant).subscribe(
      (responseDto) => {
        console.log('debug responseDto UPDATE : ', responseDto);
        this.messageValidation ='Modification Réalisée'
      },
      (error) => {
        this.messageValidation ='Modification NON réalisée'
      }

    );
  }
  

}
