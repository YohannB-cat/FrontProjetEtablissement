import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from 'src/app/models/response-dto';
import { Observable } from 'rxjs';
import { EtudiantDto } from 'src/app/models/etudiant-dto';
import {environment} from 'src/environments/environment';
import { EtudiantCreateDto } from 'src/app/models/etudiant-create-dto';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  
  etudiant : EtudiantCreateDto;

  private URL = environment.baseUrl + 'etudiant';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/all');
  }

  delete(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + '/' + id);
  }

  getId(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/' + id);
  }

  create(etudiant: EtudiantDto): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, etudiant);
  }

  update(etudiant : EtudiantCreateDto): Observable<ResponseDto>{
    return this.http.put<ResponseDto>(this.URL, etudiant);
  }

}
