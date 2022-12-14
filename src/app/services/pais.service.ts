import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  baseURL = environment.backend;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Pais[]>(`${this.baseURL}/pais`);
  }
}
