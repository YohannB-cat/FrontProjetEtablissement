import { Component, OnInit } from '@angular/core';
import { MatiereCreateDto } from 'src/app/models/matiere-create-dto';
import { MatiereService } from 'src/app/services/mmatiere/matiere.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-matiere-detail',
  templateUrl: './matiere-detail.component.html',
  styleUrls: ['./matiere-detail.component.css']
})
export class MatiereDetailComponent implements OnInit {

  matiereSelected = new MatiereCreateDto();
  messageValidation = null;
  messageEchec = null;

  updateForm : FormGroup;

  constructor(private service : MatiereService) { }

  ngOnInit(): void {
    this.matiereSelected = this.service.matiere ;
    this.updateForm = new FormGroup({
      'nom' : new FormControl(this.matiereSelected.nom, Validators.required)
    })
  }


  get nom() { return this.updateForm.get('nom'); }

  update() :  void {
    this.service.update(this.matiereSelected).subscribe(
      responseDto => {
        if (!responseDto.error) {
          this.messageValidation = responseDto.message;
        }
        else { this.messageEchec = responseDto.message}
      }
    )
  }

}
