import { Component, OnInit } from '@angular/core';
import { AbsenceCreateDto } from 'src/app/models/absence-create-dto';
import { AbsencesService } from 'src/app/services/absence/absences.service';

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.component.html',
  styleUrls: ['./create-absence.component.css']
})
export class CreateAbsenceComponent implements OnInit {

  absence= new AbsenceCreateDto();

  messageValidation= '';
  
  constructor(private service: AbsencesService) { }

  ngOnInit() {
  }

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
