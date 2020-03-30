import { Component, OnInit } from '@angular/core';
import { EtudiantCreateDto } from 'src/app/models/etudiant-create-dto';
import { EtudiantsService } from 'src/app/services/etudiant/etudiants.service';
import { Etudiant } from 'src/app/models/etudiant';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service: EtudiantsService) { }
  etudiant : Etudiant;
  messageValidation ='';
  etudiantForm: FormGroup

  ngOnInit() {
    this.getEtudiant(),
    this.etudiantForm = new FormGroup({
      'nom' : new FormControl(this.etudiant.nom, Validators.required),
      'prenom': new FormControl(this.etudiant.prenom, Validators.required),
      'email': new FormControl(this.etudiant.email, Validators.required),
      'cni': new FormControl(this.etudiant.cni, Validators.required),
      'sexe': new FormControl(this.etudiant.sexe, Validators.required),
      'adresse': new FormControl(this.etudiant.adresse, Validators.required),
      'ville': new FormControl(this.etudiant.ville, Validators.required),
      'codePostal': new FormControl(this.etudiant.codePostal, [Validators.required, Validators.min(10000), Validators.max(99999)]),
      'tel': new FormControl(this.etudiant.telephone, Validators.required),
      'enEtude': new FormControl(this.etudiant.enEtude, Validators.required)

    })
  }

  get nom() { return this.etudiantForm.get('nom'); }
  get prenom() { return this.etudiantForm.get('prenom'); }
  get email() { return this.etudiantForm.get('email'); }
  get cni() { return this.etudiantForm.get('cni'); }
  get sexe() { return this.etudiantForm.get('sexe'); }
  get adresse() { return this.etudiantForm.get('adresse'); }
  get ville() { return this.etudiantForm.get('ville'); }
  get codePostal() { return this.etudiantForm.get('codePostal'); }
  get tel() { return this.etudiantForm.get('tel'); }
  get enEtude() { return this.etudiantForm.get('enEtude'); }
  


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
