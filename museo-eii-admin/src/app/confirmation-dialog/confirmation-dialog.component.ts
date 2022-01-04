import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.close(false);
  }

  continue() {
    this.dialog.close(true);
  }

}
