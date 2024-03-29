import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CompetitionDto} from "../../models/competition-dto.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private readonly competitionUrl = `${environment.api.baseUrl}/${environment.api.competitionUrl}`;
  constructor(
    private http: HttpClient
  ) { }

  save(competition: CompetitionDto): Observable<CompetitionDto>{
    return this.http.post<CompetitionDto>(this.competitionUrl, competition);
  }

  findAll(): Observable<CompetitionDto[]>{
    return this.http.get<CompetitionDto[]>(this.competitionUrl);
  }
  findAllPaginated(page: number, size: number): Observable<any>{
    return this.http.get<any>(`${this.competitionUrl}/paginated?page=${page}&size=${size}`);
  }
  findAllFilteredAndPaginated(filter: string, page: number, size: number): Observable<any>{
    return this.http.get<any>(`${this.competitionUrl}/filtered?filter=${filter}&page=${page}&size=${size}`);
  }

  find(id: string): Observable<CompetitionDto>{
    return this.http.get<CompetitionDto>(`${this.competitionUrl}/${id}`);
  }


  update(id: string, competition: CompetitionDto): Observable<CompetitionDto>{
    return this.http.put<CompetitionDto>(`${this.competitionUrl}/${id}`, competition);
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.competitionUrl}/${id}`);
  }
}
