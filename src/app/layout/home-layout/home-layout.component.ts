import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HomeTabComponent } from '../home-tab/home-tab.component';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ContactInfoComponent, HomeTabComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {}
