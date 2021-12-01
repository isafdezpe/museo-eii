import { Component, OnInit } from '@angular/core';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-list-periods',
  templateUrl: './list-periods.component.html',
  styleUrls: ['./list-periods.component.css']
})
export class ListPeriodsComponent implements OnInit {

  periods: Period[] = [];

  constructor(private periodService: PeriodService) { }

  ngOnInit(): void {
    this.getPeriods();
    console.log(this.periods)
  }

  getPeriods() {
    this.periodService.getAll().forEach(element => {
      this.periods.push(element)
    });
  }

  deletePeriod(p: Period) {
    this.periodService.deletePeriod(p);
  }

}
