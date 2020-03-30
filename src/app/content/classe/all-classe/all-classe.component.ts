import { Component, OnInit } from '@angular/core';
import { ClasseCreateDto } from "src/app/models/classe-create-dto";
import { ClassesService } from "src/app/services/classe/classes.service";

@Component({
  selector: 'app-all-classe',
  templateUrl: './all-classe.component.html',
  styleUrls: ['./all-classe.component.css']
})
export class AllClasseComponent implements OnInit {

  allClasse = new Array<ClasseCreateDto>();

  classe: ClasseCreateDto;

  messageErreur = '';

  constructor(private service: ClassesService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.messageErreur='';
    this.service.getAll().subscribe(
      (ResponseDto) => {
        console.log('debug responseDto : ', ResponseDto);
        if (!ResponseDto.error) {
          this.allClasse = ResponseDto.object;
        }
      }
    );
  }

  delete(id: number) {
    this.messageErreur='';
    this.service.delete(id).subscribe(
      ResponseDto => {
        console.log('debug responseDto : ', ResponseDto);
        if (!ResponseDto.error) {
          this.allClasse = this.allClasse.filter(
            element => element.id !== id
          );
        }
        console.log('result after delete : ', this.allClasse);
      }
    );
  }

  search(id: number) {
    this.messageErreur='';
    this.service.getId(id).subscribe(
      //SUCCESS
      (ResponseDto) => {
        console.log('debug reponseDto : ', ResponseDto);
        if (!ResponseDto.error) {
          this.classe = ResponseDto.object;
        }
      },
      //FAIL
      (error) => {
        console.log('debug error', error);
        this.messageErreur= "Il n'y a pas de classe avec l'identifiant "+id;
      }
    );
  }

}
