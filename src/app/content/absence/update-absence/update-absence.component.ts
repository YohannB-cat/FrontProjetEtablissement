import { Component, OnInit } from '@angular/core';
import { AbsencesService } from 'src/app/services/absence/absences.service';
import { Absence } from 'src/app/models/absence';

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrls: ['./update-absence.component.css']
})
export class UpdateAbsenceComponent implements OnInit {

  constructor(private service: AbsencesService) { }

  absence: Absence;

  messageValidation= '';

  ngOnInit() {
    this.getAbsence();
  }

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
