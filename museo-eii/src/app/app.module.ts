import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MzdTimelineModule } from 'ngx-mzd-timeline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MuseumTimelineComponent } from './museum-timeline/museum-timeline.component';
import { AboutComponent } from './about/about.component';
import { PeriodComponent } from './period/period.component';
import { CompDetailsComponent } from './comp-details/comp-details.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CpuDetailsComponent } from './cpu-details/cpu-details.component';
import { IvyGalleryModule } from 'angular-gallery';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MainNavComponent,
    MuseumTimelineComponent,
    AboutComponent,
    PeriodComponent,
    CompDetailsComponent,
    CpuDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    MzdTimelineModule,
    IvyGalleryModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
