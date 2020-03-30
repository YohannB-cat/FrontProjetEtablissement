import { Component, OnInit } from '@angular/core';
import { AbsenceCreateDto } from 'src/app/models/absence-create-dto';
import { AbsencesService } from 'src/app/services/absence/absences.service';


@Component({
  selector: 'app-all-absence',
  templateUrl: './all-absence.component.html',
  styleUrls: ['./all-absence.component.css']
})
export class AllAbsenceComponent implements OnInit {

  allAbsence = new Array<AbsenceCreateDto>();

  absence: AbsenceCreateDto;

  messageErreur = '';

  constructor(private service: AbsencesService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.messageErreur = '';
    this.service.getAll().subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allAbsence = responseDto.object;
        }
      }
    )
  }

  delete(id : number) {
    console.log("DEBUG id = " +id);
    this.service.delete(id).subscribe(
      responseDto => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allAbsence = this.allAbsence.filter(
            element => element.id !== id
          );
          this.absence=null;
        }
        console.log('result after delete: ', this.allAbsence);
      }
    );
  }

  search(id: number) {
    this.messageErreur = '';
    this.service.getId(id).subscribe(
      //SUCCESS
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.absence = responseDto.object;
        }

      },
      //FAIL
      (error) => {
        console.log('debug error', error);
        this.messageErreur = "Il n'y a pas d'absence avec l'identifiant " + id;
      }
    );
  }

  stockageAbsence(absence: AbsenceCreateDto){
    this.service.absence = absence;
  }

}
