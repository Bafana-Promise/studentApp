import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { DeregdialogComponent } from '../deregdialog/deregdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RegdialogComponent } from '../regdialog/regdialog.component';


@Component({
  selector: 'app-register-classes',
  templateUrl: './register-classes.component.html',
  styleUrls: ['./register-classes.component.scss']
})
export class RegisterClassesComponent implements OnInit {

  dataSource: any = [];
  student: any = {};
  displayedColumns: string[] = ['code', 'class', 'action'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private router: Router, private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // fetch the data
    this.student = this.dataService.getStudent()
    this.getData()
  }

  getData() {
    this.dataSource = this.student.classes.registered;
  }

  applyFilter(event: Event) {
    const filterstudent = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  openRegDialog() {
    //open register dialog
    this.dialog.open(RegdialogComponent).afterClosed().subscribe(result => {
      // check if with the entered ID exist
      // we need to push the class object into the student class array
      if (result) {
        //if it's true return the selected
        this.student.classes.registered.push(result);
        localStorage.setItem("student", JSON.stringify(this.student))

        this.refreshData();

      }
    })
  }

  refreshData() {
    this.student = JSON.parse(localStorage.getItem("student"));
    this.dataSource = this.student.classes.registered;
  }
  deleteClass(objClass) {
    console.log(objClass);

    for (let i = 0; i < this.student.classes.registered.length; i++) {
      if (objClass.name == this.student.classes.registered[i].name) {
        //push the selected to deregistered 
        this.student.classes.deregistered.push(this.student.classes.registered[i]);
        this.student.classes.registered.splice(i, 1);
        localStorage.setItem("student", JSON.stringify(this.student));
        this.refreshData();
      }


    }

  }
}
