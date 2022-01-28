import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.css']
})
export class AddPeriodComponent implements OnInit {

  p: Period = new Period("", "", "", "");
  model: Period = new Period("", "", "", "");

  constructor(private periodService: PeriodService, private snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.periodService.addPeriod(this.model).subscribe(() => {
      this.snackBar.open('Periodo guardado', undefined, {duration:1500})
      let periodId: number;
      this.periodService.getPeriodByName(this.model.period_name).subscribe((p: Period) => {
        periodId = p.period_id;
        this.router.navigateByUrl('/addComp/' + periodId);
      });
    });
  }
}
