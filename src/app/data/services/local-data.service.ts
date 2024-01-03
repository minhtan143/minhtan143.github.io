import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private http: HttpClient) { }

  public getContact(): Observable<Contact> {
    return this.http.get<Contact>("assets/static-data/contact.json");
}
}
