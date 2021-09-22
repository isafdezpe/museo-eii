import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MuseumTimelineComponent } from './museum-timeline/museum-timeline.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'museum', component: MuseumTimelineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
