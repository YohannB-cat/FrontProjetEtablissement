import { Component, OnInit } from '@angular/core';
import { ClasseDto } from "src/app/models/classe-dto";
import { ClassesService } from "src/app/services/classe/classes.service";
import { ResponseDto } from 'src/app/models/response-dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-classe',
  templateUrl: './create-classe.component.html',
  styleUrls: ['./create-classe.component.css']
})
export class CreateClasseComponent implements OnInit {

  classeForm : FormGroup;
  classe = new ClasseDto();
  messageValidation = '';

  constructor(private service: ClassesService) { }

  ngOnInit(): void {
    this.classeForm = new FormGroup({
      'nom' : new FormControl(this.classe.nom, Validators.required),
    })
  }

  get nom() { return this.classeForm.get('nom'); }

  save() {
    this.service.create(this.classe).subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.messageValidation = responseDto.message;
        }
      }
    );
  }

}
