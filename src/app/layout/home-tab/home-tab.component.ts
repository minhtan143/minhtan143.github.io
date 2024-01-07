import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-tab',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-tab.component.html',
  styleUrl: './home-tab.component.scss',
})
export class HomeTabComponent {
  navs = [
    { link: '/', title: 'About' },
    { link: '/experience', title: 'Experience' },
    { link: '/contact', title: 'Contact' },
  ];
}
