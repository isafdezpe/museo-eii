import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() selectedLang: string;
  @Input() langs: string[];

  @Output() langEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.langEvent.emit(lang);
  }

}
