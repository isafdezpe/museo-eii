import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() selectedLang: string; // idioma en el que se muestra la página
  @Input() langs: string[]; // listado de idiomas disponibles 

  @Output() langEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Cambia el idioma de la página al seleccionado
   * @param lang : nuevo idioma seleccionado
   */
  changeLanguage(lang: string) {
    this.langEvent.emit(lang);
  }

}
