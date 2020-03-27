import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen/examen.service';
import { ExamenDto } from 'src/app/models/examen-dto';

@Component({
  selector: 'app-create-examen',
  templateUrl: './create-examen.component.html',
  styleUrls: ['./create-examen.component.css']
})
export class CreateExamenComponent implements OnInit {

  examen = new ExamenDto();
  messageValidation = '';
  error:boolean;

  constructor(private service: ExamenService) { }

  ngOnInit(): void {
  }

  save() {
    this.service.create(this.examen).subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.messageValidation = 'BRAVO ! L\'examen a bien été ajouté à la DB';
          this.error = false;
        }
      },
      (error) => {
        console.log('debug responseDto : ', error);
        this.messageValidation = 'ERREUR ! L\'examen n\'a pas été ajouté à la DB';
        this.error = true;
        }

    );
  }

}
