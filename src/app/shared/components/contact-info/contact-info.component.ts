import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../../data/services/local-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { ContactModel, InformationModel } from '../../../data/models/information.model';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent implements OnInit {
  contact: ContactModel = {} as ContactModel;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faSkype = faSkype;

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.localDataService.Information.subscribe((information: InformationModel) => {
      this.contact = information.contact;
    });
  }
}
