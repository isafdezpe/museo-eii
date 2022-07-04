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
  { path: 'component/:id', component: CompDetailsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
