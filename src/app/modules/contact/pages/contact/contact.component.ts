import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDataService } from '../../../../data/services/local-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  providers: [LocalDataService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contacts: any;

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.localDataService.getInformation().subscribe((about) => {
      this.contacts = [
        {
          title: 'Email',
          link: about.contact.email,
          content: about.email,
        },
        {
          title: 'Skype',
          link: about.contact.skype,
          content: about.skype,
        },
        {
          title: 'Workplace',
          content: about.workplace,
        },
      ];
    });
  }
}
