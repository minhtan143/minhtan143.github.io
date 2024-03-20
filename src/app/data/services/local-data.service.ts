import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactModel, InformationModel } from '../models/information.model';
import { ExperienceModel } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private information = new BehaviorSubject<InformationModel>({
    contact: {} as ContactModel,
  } as InformationModel);
  private experience = new BehaviorSubject<Array<ExperienceModel>>(
    {} as Array<ExperienceModel>
  );

  Information = this.information.asObservable();
  Experience = this.experience.asObservable();

  constructor(private http: HttpClient) {
    this.getInformation();
    this.getExperience();
  }

  private getInformation(): void {
    this.http
      .get<InformationModel>('assets/static-data/information.json')
      .subscribe((information: InformationModel) => {
        this.information.next(information);
      });
  }

  private getExperience(): void {
    this.http
      .get<Array<ExperienceModel>>('assets/static-data/experience.json')
      .subscribe((experience: Array<ExperienceModel>) => {
        this.experience.next(experience);
      });
  }
}
