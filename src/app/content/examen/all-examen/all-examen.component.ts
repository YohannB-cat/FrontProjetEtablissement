import { Component, OnInit } from '@angular/core';
import { ExamenCreateDto } from 'src/app/models/examen-create-dto';
import { ExamenService } from 'src/app/services/examen/examen.service';

@Component({
  selector: 'app-all-examen',
  templateUrl: './all-examen.component.html',
  styleUrls: ['./all-examen.component.css']
})
export class AllExamenComponent implements OnInit {

  allExamen = new Array<ExamenCreateDto>();

  constructor(private service:ExamenService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allExamen = responseDto.object;
        }
      }
    );
  }

  delete(id: number) {
    this.service.delete(id).subscribe(
      responseDto => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allExamen = this.allExamen.filter(
            element =>  element.id !== id
          );
        }
        console.log('result after delete: ', this.allExamen);
      }
    );
  }

  getOne(id: number) {
    this.service.getOne(id).subscribe(
      responseDto => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.allExamen = this.allExamen.filter(
            element =>  element.id == id
          );
        }
        console.log('result after delete: ', this.allExamen);
      }
    );
  }


}
