import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../data/services/local-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { Contact } from '../../data/models/contact';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  providers: [LocalDataService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  contact: Contact = {} as Contact;
  currentYear = 0;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faSkype = faSkype;

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.localDataService.getContact().subscribe((contact) => {
      this.contact = contact;
    });
    this.currentYear = new Date().getFullYear();
  }
}
