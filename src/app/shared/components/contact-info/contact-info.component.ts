import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../data/models/contact';
import { LocalDataService } from '../../../data/services/local-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FontAwesomeModule],
  providers: [LocalDataService],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent implements OnInit {
  contact: Contact = {} as Contact;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faSkype = faSkype;

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.localDataService.getContact().subscribe((contact) => {
      this.contact = contact;
    });
  }
}
