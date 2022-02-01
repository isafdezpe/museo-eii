import { Component, OnInit } from '@angular/core';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-museum-timeline',
  templateUrl: './museum-timeline.component.html',
  styleUrls: ['./museum-timeline.component.css']
})
export class MuseumTimelineComponent implements OnInit {

  periods: Period[] = [];

  constructor(private periodService: PeriodService) { }

  ngOnInit(): void {
    this.getPeriods();
  }

  getPeriods(): void {
    this.periodService.getPeriods().subscribe((p: Period[]) => this.periods = p);
  }

}
