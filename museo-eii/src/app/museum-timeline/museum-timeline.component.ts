import { Component, OnInit } from '@angular/core';
import { MyComponent } from '../comp';
import { ComponentService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-museum-timeline',
  templateUrl: './museum-timeline.component.html',
  styleUrls: ['./museum-timeline.component.css']
})
export class MuseumTimelineComponent implements OnInit {

  periods: Period[] = []; // listado ordenado de periodos
  comps: Map<number, MyComponent[]> = new Map<number, MyComponent[]>(); // componentes de cada periodo

  constructor(private periodService: PeriodService, private compService: ComponentService) { }

  ngOnInit(): void {
    this.getPeriods();
  }

  /**
   * Obtiene todos los periodos que tengan asociado al menos un componente, ordenados por antigüedad
   */
  getPeriods(): void {
    this.periodService.getPeriods().subscribe((p: Period[]) => {
      this.periods = p;
      this.getCompsFromPeriods();
      this.getYears();
    });
  }

  /**
   * Obtiene los componentes de cada periodo
   */
  getCompsFromPeriods() {
    this.periods.forEach((p: Period) => this.compService.getComponentsFromPeriod(p.period_id).subscribe((comps: MyComponent[]) => this.comps.set(p.period_id, comps)));
  }

  /**
   * Obtiene los años que comprende cada periodo
   */
  getYears() {
    this.periods.forEach((p: Period) => this.periodService.getYearsPeriod(p.period_id).subscribe((years: {year_init, year_end}) => {
      p.year_end = years.year_end;
      p.year_init = years.year_init;
    }))
  }

}
