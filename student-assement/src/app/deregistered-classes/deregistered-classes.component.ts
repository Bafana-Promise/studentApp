import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { DeregdialogComponent } from '../deregdialog/deregdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RegdialogComponent } from '../regdialog/regdialog.component';


@Component({
  selector: 'app-deregistered-classes',
  templateUrl: './deregistered-classes.component.html',
  styleUrls: ['./deregistered-classes.component.scss']
})
export class DeregisteredClassesComponent implements OnInit {

  class = []
  attendence = 0;
  highestSubject;
  highestMark = 0;
  lowestMark = 0;
  lowestSubject;
  deregistered = 0;


  profile = ''
  dataSource: MatTableDataSource<any>;
  student: any = '';

  constructor(private router: Router, private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // fetch the data
    this.student = this.dataService.getStudent()
    this.getData()
  }

  getData() {
    this.dataSource = this.student.classes.deregistered;
  }

  displayedColumns: string[] = ['subject', 'class'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}
