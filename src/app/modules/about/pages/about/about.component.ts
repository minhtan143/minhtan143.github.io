import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDataService } from '../../../../data/services/local-data.service';
import { InformationModel } from '../../../../data/models/information.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  currentYear = 0;
  introduce = '';
  about: any;

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();

    this.localDataService.Information.subscribe((about: InformationModel) => {
      this.introduce = about.introduce;

      this.about = [
        {
          title: 'Age',
          content: this.currentYear - about.yearOfBirth,
        },
        {
          title: 'Experience',
          content: `~${this.currentYear - about.startYears} years`,
        },
        { title: 'Email', content: about.email },
        { title: 'Skype', content: about.skype },
        { title: 'Address', content: about.address },
      ];
    });
  }
}
