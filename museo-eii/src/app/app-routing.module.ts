import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompDetailsComponent } from './comp-details/comp-details.component';
import { HomeComponent } from './home/home.component';
import { MuseumTimelineComponent } from './museum-timeline/museum-timeline.component';
import { PeriodComponent } from './period/period.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'museum', component: MuseumTimelineComponent},
  { path: 'about', component: AboutComponent},
  { path: 'period/:id', component: PeriodComponent},
  { path: 'cpu/:id', component: CompDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
