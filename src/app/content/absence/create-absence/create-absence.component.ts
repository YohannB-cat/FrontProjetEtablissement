import { Component, OnInit } from '@angular/core';
import { AbsenceCreateDto } from 'src/app/models/absence-create-dto';
import { AbsencesService } from 'src/app/services/absence/absences.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.component.html',
  styleUrls: ['./create-absence.component.css']
})
export class CreateAbsenceComponent implements OnInit {

  absence= new AbsenceCreateDto();

  messageValidation= '';


  absenceForm: FormGroup;
  
  constructor(private service: AbsencesService) { }

  ngOnInit(): void {
    this.absenceForm = new FormGroup({
      'debut': new FormControl(this.absence.debut, [Validators.required]),
      'fin': new FormControl(this.absence.fin, Validators.required),
      'justification': new FormControl(this.absence.fin, Validators.required),
      'description': new FormControl(this.absence.fin, Validators.required)
    });
  }

  // formatDate(debut: string): ValidatorFn {
  //   this.dateFormat= "\d{4}-\d{2}-\d{2}";
  //   console.log("DEBUG DEBUT = ", debut);
  //   return (control: AbstractControl): { [key: string]: boolean } | null => {
  //     console.log("DEBUG DEBUT match = ", debut.match(this.dateFormat));
  //     if (debut.match(this.dateFormat)) {
  //       return {'format': true}
  //     } else {
  //       return null;
  //     }
  //   };
  // }

  get debut() { return this.absenceForm.get('debut'); }
  get fin() { return this.absenceForm.get('fin'); }
  get justification() { return this.absenceForm.get('justification'); }
  get description() { return this.absenceForm.get('description'); }

  save() {
    this.service.create(this.absence).subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.messageValidation = responseDto.message;
        }
      }
    );
  }
  
}
