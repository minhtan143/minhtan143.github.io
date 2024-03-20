import { Component, OnInit } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { loadFull } from 'tsparticles';
import { environment } from './../environments/environment';

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
  descriptionMeta =
    'I am passionate about developing high-quality software that is reliable and scalable. I am also a strong believer in the DevOps approach, which I believe can help organizations to improve the speed, efficiency, and quality of their software delivery.';

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
        opacity: 0.3,
        width: 0.3,
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
        value: 0.5,
      },
      size: {
        value: { min: 0.5, max: 0.8 },
      },
    },
    detectRetina: true,
  };

  constructor(
    private meta: Meta,
    private readonly ngParticlesService: NgParticlesService,
  ) {}

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'robots', content: 'index,follow' },
      { name: 'description', content: this.descriptionMeta },
      { property: 'og:url', content: environment.baseUrl },
      {
        property: 'og:title',
        content: 'Tan Pham - .NET Developer and DevOps Engineer',
      },
      {
        property: 'og:image',
        content: `${environment.baseUrl}assets/images/avatar.jpg`,
      },
      { property: 'og:site_name', content: 'Tan Pham' },
      {
        property: 'og:keywords',
        content: 'TP,Tan Pham,Phạm Văn Minh Tân,.NET Developer,DevOps Engineer',
      },
      { property: 'og:description', content: this.descriptionMeta },
      { property: 'og:type', content: 'profile' },
      { property: 'og:app_id', content: '369083645868629' },
    ]);

    this.ngParticlesService.init(async (engine) => {
      await loadFull(engine);
    });
  }
}
