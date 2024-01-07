import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [{
  path: '',
  component: ExperienceComponent,
  title: 'Tan Pham - Experience',
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
