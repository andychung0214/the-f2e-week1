import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mat-dialog-component',
  templateUrl: './mat-dialog-component.component.html',
  styleUrls: ['./mat-dialog-component.component.scss']
})
export class MatDialogComponentComponent implements OnInit {

  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
