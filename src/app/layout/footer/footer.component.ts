import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../../shared/components/contact/contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear = 0;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
