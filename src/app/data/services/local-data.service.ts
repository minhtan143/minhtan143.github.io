import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactModel, InformationModel } from '../models/information.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private information = new BehaviorSubject<InformationModel>({
    contact: {} as ContactModel,
  } as InformationModel);
  Information = this.information.asObservable();

  constructor(private http: HttpClient) {
    this.getInformation();
  }

  private getInformation(): void {
    this.http
      .get<InformationModel>('assets/static-data/information.json')
      .subscribe((information) => {
        this.information.next(information);
      });
  }
}
