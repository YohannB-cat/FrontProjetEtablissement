import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen/examen.service';
import { ExamenDto } from 'src/app/models/examen-dto';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-examen',
  templateUrl: './create-examen.component.html',
  styleUrls: ['./create-examen.component.css']
})
export class CreateExamenComponent implements OnInit {
  examenForm:FormGroup;

  examen = new ExamenDto();
  messageValidation = '';
  error:boolean;

  constructor(private service: ExamenService) { }

  ngOnInit(): void {
    this.examenForm = new FormGroup({
      type: new FormControl(this.examen.type,[Validators.required,Validators.maxLength(20)]),
      coefficient: new FormControl(this.examen.coefficient,Validators.required),
      date: new FormControl(this.examen.date,Validators.required),
    });
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
