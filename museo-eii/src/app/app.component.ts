import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'museo-eii';
  
  languages:string[] = ['es', 'en'];
  
  selectedLanguage:string = this.languages[0];

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  selectLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
