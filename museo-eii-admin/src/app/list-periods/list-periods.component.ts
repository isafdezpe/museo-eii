import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-list-periods',
  templateUrl: './list-periods.component.html',
  styleUrls: ['./list-periods.component.css']
})
export class ListPeriodsComponent implements OnInit {

  periods: Period[] = [];

  constructor(private periodService: PeriodService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPeriods();
  }

  /**
   * Obtiene la lista de periodos
   */
  getPeriods() {
    this.periodService.getAll().subscribe((periods: Period[]) => this.periods = periods);
  }

  /**
   * Elimina un periodo de la lista
   * @param p : periodo que se va a eliminar
   */
  deletePeriod(p: Period) {
    this.dialog
      .open(ConfirmationDialogComponent, {data:`¿Desea eliminar el periodo ${p.period_name}?`})
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed)
          this.periodService.deletePeriod(p).subscribe(() => {
            this.getPeriods();
            this.snackBar.open('Periodo eliminado', 'Cerrar');
          });
      });
  }

}
