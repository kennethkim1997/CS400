import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CITY} from '../models/cityModel';


@Injectable({
  providedIn: 'root'
})
export class CityServiceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  citiesEndpoint = 'http://localhost:3000/api/db';

  getCities(): Observable<CITY[]> {
    return this.httpClient.get<CITY[]>(this.citiesEndpoint);
  }

  constructor(private httpClient: HttpClient) {
  }
}
