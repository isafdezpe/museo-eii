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

  p: Period = new Period("", "", "", ""); // objeto con los valores iniciales
  model: Period = new Period("", "", "", ""); // objeto asignado en el formulario sobre el que se realizan los cambios

  constructor(private periodService: PeriodService, private snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Inserta el periodo, obtiene el id con el que se ha insertado y navega a la página de añadir componente con este periodo seleccionado
   */
  submit() {
    this.periodService.addPeriod(this.model).subscribe(() => {
      this.snackBar.open('Periodo guardado', 'Cerrar')
      let periodId: number;
      this.periodService.getPeriodByName(this.model.period_name).subscribe((p: Period) => {
        periodId = p.period_id;
        this.router.navigateByUrl('/addComp/' + periodId);
      });
    });
  }
}
