import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from 'src/app/models/response-dto';
import { Observable } from 'rxjs';
import { ExamenCreateDto } from 'src/app/models/examen-create-dto';
import { ExamenDto } from 'src/app/models/examen-dto';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private URL = environment.baseUrl + 'examen/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + 'all');
  }

  delete(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + id);
  }

  create(etudiant: ExamenDto): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, etudiant);
  }
  update(etudiant: ExamenCreateDto): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, etudiant);
  }
  getOne(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + id);
  }
  getMatiere(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + 'matiere?id=' + id);
  }

}
