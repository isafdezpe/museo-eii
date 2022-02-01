import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MyComponent } from '../comp';
import { ComponentService } from '../component.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
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

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private dialog: MatDialog, private snackBar: MatSnackBar, private componentService: ComponentService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('periodId'));
    this.getPeriod(idFromRoute);
  }

  getPeriod(id: number) {
    this.periodService.getPeriod(id).subscribe((period: Period) => {
      this.p = period;
      this.getComponents();
      let famousSys = [];
      this.comps.forEach((c: MyComponent) => famousSys.push({name: c.name, img: c.famousSystemImg, sysName: c.famousSystem}));
      this.p.famousSystems = famousSys;
    });
  }

  getComponents() {
    this.componentService.getComponentsFromPeriod(this.p.period_id).subscribe((comps) => console.log(comps));
  }

  deleteComponent(c: MyComponent) {
    this.dialog
      .open(ConfirmationDialogComponent, {data:`¿Desea eliminar el componente ${c.name}?`})
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed)
          this.componentService.deleteComponent(c).subscribe(() => {
            this.getComponents();
            this.snackBar.open('Componente eliminado', undefined, {duration: 1500});
          });
      });
  }

}
