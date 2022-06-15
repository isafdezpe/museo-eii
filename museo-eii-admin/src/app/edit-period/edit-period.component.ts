import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Period } from './../classes/period';
import { PeriodService } from '../services/period.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-period',
  templateUrl: './edit-period.component.html',
  styleUrls: ['./edit-period.component.css']
})
export class FormEditPeriodComponent implements OnInit {

  p: Period; // objeto con los valores sin editar
  model: Period; // objeto asignado en el formulario sobre el que se realizan los cambios

  constructor(private route: ActivatedRoute, private periodService: PeriodService, private snackBar: MatSnackBar, private _location: Location, private dialog: MatDialog, private toastService: ToastrService) { }

  ngOnInit(): void {
    // saca el id del periodo que se va a editar
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('periodId'));
    this.getPeriod(idFromRoute);
  }

  /**
   * Obtiene el periodo para editarlo
   * @param id : id del periodo a editar
   */
  getPeriod(id: number) {
    this.periodService.getPeriod(id).subscribe((period: Period) => {
      this.p = new Period(period.period_name, period.period_trivia, period.period_details, period.period_events, id);
      this.model = this.clonePeriod(this.p);
    });
  }

  /**
   * Actualiza el periodo
   */
  submit() {
    if (!this.isValid(this.model))
      this.toastService.error("Debe completar el formulario para guardar", "Error",  {positionClass: "toast-bottom-full-width"} );
    else 
      this.periodService.editPeriod(this.model).subscribe(() => {
        this.snackBar.open('Periodo actualizado', 'Cerrar', { duration: 1500 });
        this.p = this.clonePeriod(this.model);
      }, () => {this.toastService.error("No se ha podido editar el periodo", "Error", {positionClass: "toast-bottom-full-width"} )});
  }

  /**
   * Cambia todos los campos del formulario a su valor inicial
   */
  resetForm() {
    this.model = this.clonePeriod(this.p);
  }

  /**
   * 
   * @param p : periodo que se quiere clonar
   * @returns periodo clonado
   */
  clonePeriod(p: Period): Period {
    return new Period(p.period_name, p.period_trivia, p.period_details, p.period_events, p.period_id);
  }

  /**
   * Vuelve a la página anterior. Si no se han guardado los cambios se muestra un diálogo para continuar o no
   */
  goBack() {
    if (this.isEdited())
      this.dialog
      .open(ConfirmationDialogComponent, {data: "No se han guardado los cambios realizados en el formulario, ¿desea continuar?"})
      .afterClosed()
      .subscribe((confirmed: boolean) => {if (confirmed) this._location.back();});
    else
    this._location.back();
  }

  /**
   * 
   * @returns si se ha editado el formulario
   */
  isEdited() {
    console.log(this.p)
    if (this.p === undefined && this.model === undefined)
      return false;
      
    return !this.p.equals(this.model);
  }

  isValid(period: Period): boolean {
    return period.period_name != "" && period.period_details != "" && period.period_trivia != "" && period.period_events != "";
  }

}
