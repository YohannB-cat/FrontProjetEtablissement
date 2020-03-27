import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseDto } from "src/app/models/response-dto";
import { environment } from "src/environments/environment";
import { ClasseDto } from "src/app/models/classe-dto";
import { ClasseCreateDto } from "src/app/models/classe-create-dto";
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private URL = environment.baseUrl + 'classe';

  constructor(private http: HttpClient) { }

  create(classe: ClasseDto): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, classe);
  }

  getAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/all');
  }

  getId(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/' + id);
  }

  update(classe: ClasseCreateDto): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, classe);
  }

  delete(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + '/' + id);
  }

}
