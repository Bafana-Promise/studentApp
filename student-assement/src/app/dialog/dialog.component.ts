import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  user: any;
  dataSource: any;
  dialog: any;
  mark: number;
                                                       //injects data from the component to another component
  constructor(private dataService: DataService,@Inject(MAT_DIALOG_DATA) public data: any, private Dialog : MatDialog,
  public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    this.user = this.dataService.getStudent()
    console.log(this.data);
    this.dataSource = this.user.classes.registered;
  }

  openDialog() {
    this.data.marks.push(this.mark)
    //return the data that i got form dailog
    this.dialogRef.close(this.data)
  }

}
