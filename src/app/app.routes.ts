import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    title: 'Tan Pham',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/about/about.module').then((x) => x.AboutModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((x) => x.AboutModule),
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('./modules/experience/experience.module').then(
            (x) => x.ExperienceModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (x) => x.ContactModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
