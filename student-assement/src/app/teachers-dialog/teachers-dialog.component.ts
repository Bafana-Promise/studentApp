import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-teachers-dialog',
  templateUrl: './teachers-dialog.component.html',
  styleUrls: ['./teachers-dialog.component.scss']
})
export class TeachersDialogComponent implements OnInit {

  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<TeachersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
