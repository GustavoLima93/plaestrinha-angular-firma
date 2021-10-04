import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(
    private http: HttpClient
  ) { }

  postFormulario(form: any) {
    return this.http.post('http://localhost:3000/posts', form);
  }
}
