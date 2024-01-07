import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationModel } from '../models/information.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  constructor(private http: HttpClient) {}

  public getInformation(): Observable<InformationModel> {
    return this.http.get<InformationModel>(
      'assets/static-data/information.json',
    );
  }
}
