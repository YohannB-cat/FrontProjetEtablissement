import { Component, OnInit } from '@angular/core';
import { ClassesService } from "src/app/services/classe/classes.service";
import { Classe } from "src/app/models/classe";
import { ResponseDto } from 'src/app/models/response-dto';
import { ClasseCreateDto } from 'src/app/models/classe-create-dto';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service: ClassesService) { }
  classe : ClasseCreateDto;
  messageValidation ='';

  ngOnInit() {
    this.getClasse();
  }

  getClasse(): void {
    this.classe = this.service.classe;
  }

  update(): void {
    this.service.update(this.classe).subscribe(
      (ResponseDto) => {
        console.log('debug responseDto UPDATE : ', ResponseDto);
        this.messageValidation ='Modification Réalisée'
      },
      (error) => {
        this.messageValidation ='Modification NON réalisée'
      }
    );
  }

}
