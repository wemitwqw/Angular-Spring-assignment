import { Injectable } from '@angular/core';
import { IPet } from '../models/pet';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getPets(): Observable<IPet[]> { 
    return this.http.get<IPet[]>(this.apiUrl)
  }

  getPetById(id: String): Observable<IPet> { 
    return this.http.get<IPet>(this.apiUrl + id)
  }

  updatePet(id: any, pet: IPet): Observable<IPet> { 
    return this.http.put<IPet>(this.apiUrl + 'edit/' + id, pet, httpOptions)
  }

  addPet(pet: IPet): Observable<IPet> {
    return this.http.post<IPet>(this.apiUrl + 'edit', pet, httpOptions);
  }

  getSelectorData(): Observable<{}> {
    return this.http.get<{}>(this.apiUrl + 'selectors/')
  }
}
