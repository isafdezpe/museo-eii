import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PERIODS } from '../mock-periods';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-form-edit-period',
  templateUrl: './form-edit-period.component.html',
  styleUrls: ['./form-edit-period.component.css']
})
export class FormEditPeriodComponent implements OnInit {

  //periods: Period[] = PERIODS;
  p: Period;
  model: Period;

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('periodId'));
    this.p = this.periodService.getPeriod(idFromRoute);
    this.model = this.clonePeriod(this.p);
  }

  /*changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.name === p)[0];
    this.model = this.clonePeriod(this.p);
  }*/

  submit() {
    /*this.periodService.editPeriod(this.model).subscribe(() => {
      this.snackBar.open('Periodo actualizado', undefined, {duration:1500})
    });*/
  }

  resetForm() {
    this.model = this.clonePeriod(this.p);
  }

  clonePeriod(p: Period): Period {
    return new Period(p.name, p.trivia, p.details, p.events, p.famousSystems, p.id);
  }

}
