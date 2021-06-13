import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeachersDialogComponent } from '../teachers-dialog/teachers-dialog.component'


export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.scss']
})
export class TeachersTableComponent implements OnInit {

  animal: string;
  name: string;

  profile = ''
  user: any = ''

  dataSource = [] ;

  constructor(private router: Router, private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'class', 'mark1', 'mark2', 'mark3', 'classAverage(%)','edit'];

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
}

openDialog(): void {
  const dialogRef = this.dialog.open(TeachersDialogComponent, {
    width: '250px',
    data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}
