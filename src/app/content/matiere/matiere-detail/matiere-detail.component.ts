import { Component, OnInit } from '@angular/core';
import { MatiereCreateDto } from 'src/app/models/matiere-create-dto';
import { MatiereService } from 'src/app/services/mmatiere/matiere.service';

@Component({
  selector: 'app-matiere-detail',
  templateUrl: './matiere-detail.component.html',
  styleUrls: ['./matiere-detail.component.css']
})
export class MatiereDetailComponent implements OnInit {

  matiere = new MatiereCreateDto;
  messageValidation = '';
  messageEchec = '';

  constructor(private service : MatiereService) { }

  ngOnInit(): void {
  }

  update(matiere : MatiereCreateDto) :  void {
    this.service.update(matiere).subscribe(
      responseDto => {
        if (!responseDto.error) {
          this.messageValidation = responseDto.message;
        }
        else { this.messageEchec = responseDto.message}
      }
    )
  }

}
