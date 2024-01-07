import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact.model';
import { AboutModel } from '../models/about.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  constructor(private http: HttpClient) {}

  public getContact(): Observable<ContactModel> {
    return this.http.get<ContactModel>('assets/static-data/contact.json');
  }

  public getAbout(): Observable<AboutModel> {
    return this.http.get<AboutModel>('assets/static-data/about.json');
  }
}
