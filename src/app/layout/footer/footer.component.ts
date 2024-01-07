import { Component, OnInit } from '@angular/core';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactInfoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear = 0;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
