import { Injectable } from '@angular/core';
import { AbsenceCreateDto } from 'src/app/models/absence-create-dto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDto } from 'src/app/models/response-dto';

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  absence: AbsenceCreateDto;

  private URL = environment.baseUrl + 'absence';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/all');
  }

  delete(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + '/' + id);
  }

  getId(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/one/' + id);
  }

  create(absence: AbsenceCreateDto): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, absence);
  }

  update(absence: AbsenceCreateDto): Observable<ResponseDto>{
    return this.http.put<ResponseDto>(this.URL, absence);
  }

}
