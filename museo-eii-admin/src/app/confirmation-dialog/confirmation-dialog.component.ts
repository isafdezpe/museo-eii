import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {


  constructor(public dialog: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string) {
    dialog.disableClose = true;
   }

  ngOnInit(): void {
  }

  /**
   * Botón NO del diálogo
   */
  closeDialog() {
    this.dialog.close(false);
  }

  /**
   * Botón SÍ del diálogo
   */
  continue() {
    this.dialog.close(true);
  }

}
