import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  model: Period = new Period("", [], [], [], []);

  constructor(private periodService: PeriodService, private snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    /*this.periodService.addPeriod(this.model).subscribe(() => {
      this.snackBar.open('Periodo guardado', undefined, {duration:1500})
    });*/
    // get period id
    let periodId: number = 1;
    this.router.navigateByUrl('/addComp/' + periodId);
  }

}
