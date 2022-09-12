
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Data } from '../models/data.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get<any>("https://api.covid19india.org/data.json");
}
}
