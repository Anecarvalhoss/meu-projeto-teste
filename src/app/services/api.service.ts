import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  
}