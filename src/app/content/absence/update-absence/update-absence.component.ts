import { Component, OnInit } from '@angular/core';
import { AbsencesService } from 'src/app/services/absence/absences.service';
import { Absence } from 'src/app/models/absence';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrls: ['./update-absence.component.css']
})
export class UpdateAbsenceComponent implements OnInit {

  constructor(private service: AbsencesService) { }

  absence: Absence;

  messageValidation= '';

  absenceUpForm: FormGroup;

  ngOnInit() {
    this.getAbsence();
    this.absenceUpForm = new FormGroup({
      'debut': new FormControl(this.absence.debut, [Validators.required]),
      'fin': new FormControl(this.absence.fin, Validators.required),
      'justification': new FormControl(this.absence.fin, Validators.required),
      'description': new FormControl(this.absence.fin, Validators.required)
    });
  }

  get debut() { return this.absenceUpForm.get('debut'); }
  get fin() { return this.absenceUpForm.get('fin'); }
  get justification() { return this.absenceUpForm.get('justification'); }
  get description() { return this.absenceUpForm.get('description'); }

  getAbsence(): void {
    this.absence= this.service.absence;
  }

  update(): void {
    this.service.update(this.absence).subscribe(
      (responseDto) => {
        console.log('debug responseDto UPDATE : ', responseDto);
        this.messageValidation ='Modification Réalisée'
      },
      (error) => {
        this.messageValidation ='Modification NON réalisée'
      }
    )
  }

}
