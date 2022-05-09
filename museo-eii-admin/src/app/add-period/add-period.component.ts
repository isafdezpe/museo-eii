import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.css']
})
export class AddPeriodComponent implements OnInit {

  p: Period = new Period("", "", "", ""); // objeto con los valores iniciales
  model: Period = new Period("", "", "", ""); // objeto asignado en el formulario sobre el que se realizan los cambios

  constructor(private periodService: PeriodService, private snackBar: MatSnackBar, public router: Router, private toastService: ToastrService) { }

  ngOnInit(): void {
  }

  /**
   * Inserta el periodo, obtiene el id con el que se ha insertado y navega a la página de añadir componente con este periodo seleccionado
   */
  submit() {
    if (!this.isValid(this.model))
      this.toastService.error("Debe completar el formulario para guardar", "Error",  {positionClass: "toast-bottom-full-width"} );
    else 
      this.periodService.addPeriod(this.model).subscribe(() => {
        this.snackBar.open('Periodo guardado', 'Cerrar', { duration: 1500 })
        let periodId: number;
        this.periodService.getPeriodByName(this.model.period_name).subscribe((p: Period) => {
          periodId = p.period_id;
          this.router.navigateByUrl('/addComp/' + periodId);
        });
      }, () => {this.toastService.error("No se ha podido añadir el periodo", "Error", {positionClass: "toast-bottom-full-width"} )});
  }

  isValid(period: Period): boolean {
    return period.period_name != "" && period.period_details != "" && period.period_trivia != "" && period.period_events != "";
  }
}
