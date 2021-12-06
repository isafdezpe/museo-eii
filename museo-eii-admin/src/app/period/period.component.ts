import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyComponent } from '../comp';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {

  p: Period;
  comps: MyComponent[] = [];

  constructor(private route: ActivatedRoute, private periodService: PeriodService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('periodId'));
    this.p = this.periodService.getPeriod(idFromRoute);
    this.getComponents();
  }

  getComponents() {
    this.periodService.getComponentsFromPeriod(this.p).forEach((e) => this.comps.push(e));
  }

  deleteComponent(c: MyComponent) {
    
  }

}
