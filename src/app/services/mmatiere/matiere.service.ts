import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { ResponseDto } from 'src/app/models/response-dto';
import { Observable } from 'rxjs';
import { MatiereCreateDto } from 'src/app/models/matiere-create-dto';
import { Module } from 'src/app/models/module';

@Injectable({
  providedIn: 'root'
})

export class MatiereService {

  matiere = new MatiereCreateDto;

  constructor(private http: HttpClient) { }

  private URL = environment.baseUrl + 'matiere';


  
  getOne(id : number) : Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/' + id);
  }

  getAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/all');
  }

  create(matiere: MatiereCreateDto): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL + '/create', matiere);
  }

  update(matiere : MatiereCreateDto) : Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL + '/update',matiere);
  }

  findMatieresByModule(id_module : Module) : Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/bymodule/'+ id_module);
  }

  delete(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + '/' + id);
  }

}
