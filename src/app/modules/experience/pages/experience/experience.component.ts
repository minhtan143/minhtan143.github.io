import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalDataService } from '../../../../data/services/local-data.service';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ExperienceModel } from '../../../../data/models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  faLocationDot = faLocationDot;
  experience: Array<ExperienceModel> = [];

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.localDataService.Experience.subscribe(
      (experience: Array<ExperienceModel>) => {
        this.experience = experience;
      }
    );
  }
}
