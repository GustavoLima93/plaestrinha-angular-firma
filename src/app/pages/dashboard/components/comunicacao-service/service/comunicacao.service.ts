import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  constructor(
    private http: HttpClient
  ) { }

  buscaPokemons(page: number) {
    return this.http.get(`https://pokemon-apiv2.herokuapp.com/pokemons?page=${page}&itemsPerPage=15`);
  }
}
