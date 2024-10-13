import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

    endpoint = 'http://localhost:8080/api/guitars';


  constructor(private httpClient: HttpClient) { }
  
  getGuitars() {
    return this.httpClient.get(this.endpoint);
  }
}
