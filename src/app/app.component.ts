import { Component, OnInit } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgxParticlesModule,
    FooterComponent,
    HomeLayoutComponent,
  ],
  providers: [NgParticlesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'about-me';

  particlesOptions = {
    fpsLimit: 60,
    particles: {
      color: {
        value: '#0000ff',
      },
      links: {
        enable: true,
        color: '#008000',
        distance: 150,
        opacity: 0.2,
        width: 0.5,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 100,
        },
        value: 100,
      },
      opacity: {
        value: 0.4,
      },
      size: {
        value: { min: 0.7, max: 1 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadFull(engine);
    });
  }
}
