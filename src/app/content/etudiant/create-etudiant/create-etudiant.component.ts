import { Component, OnInit } from '@angular/core';
import { EtudiantDto } from 'src/app/models/etudiant-dto';
import { EtudiantsService } from 'src/app/services/etudiant/etudiants.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {

  etudiantForm : FormGroup;
  etudiant = new EtudiantDto();
  messageValidation = '';

  constructor(private service: EtudiantsService) { }

  ngOnInit() {
    this.etudiantForm = new FormGroup({
      'nom' : new FormControl(this.etudiant.nom, Validators.required),
      'prenom': new FormControl(this.etudiant.prenom, Validators.required),
      'email': new FormControl(this.etudiant.email, Validators.required),
      'cni': new FormControl(this.etudiant.cni, Validators.required),
      'sexe': new FormControl(this.etudiant.sexe, Validators.required)
    })
  }

  get nom() { return this.etudiantForm.get('nom'); }
  get prenom() { return this.etudiantForm.get('prenom'); }
  get email() { return this.etudiantForm.get('email'); }
  get cni() { return this.etudiantForm.get('cni'); }
  get sexe() { return this.etudiantForm.get('sexe'); }

  save() {
    this.service.create(this.etudiant).subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.messageValidation = responseDto.message;
        }
      }
    );
  }

}
