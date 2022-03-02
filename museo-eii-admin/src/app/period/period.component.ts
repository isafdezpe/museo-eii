import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
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

  imgUrl = environment.baseImgUrl;

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
      this.p = new Period(period.period_name, period.period_trivia, period.period_details, period.period_events, id);
      this.getComponents();
    });
  }

  getComponents() {
    this.componentService.getComponentsFromPeriod(this.p.period_id).subscribe((comps: MyComponent[]) => {
      this.comps = comps;
      let famousSys = [];
      this.comps.forEach((c: MyComponent) => {
        if (c.famous_system_img !== "" && c.famous_system !== "") 
          famousSys.push({name: c.component_name, img: c.famous_system_img, sysName: c.famous_system})
      });
      this.p.famousSystems = famousSys;
    });
  }

  deleteComponent(c: MyComponent) {
    console.log(c.component_id)
    this.dialog
      .open(ConfirmationDialogComponent, {data:`¿Desea eliminar el componente ${c.component_name}?`})
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed)
          this.componentService.deleteComponent(c.component_id).subscribe(() => {
            this.getComponents();
            this.snackBar.open('Componente eliminado', undefined, {duration: 1500});
          });
      });
  }

}
