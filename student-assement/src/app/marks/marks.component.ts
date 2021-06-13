import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {



  user: any = ''
  dataSource = [];
  marksDialog: any;

  constructor(private router: Router, private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.dataService.getStudent()
    console.log(this.user);
    this.dataSource = this.user.classes.registered;
  }
  displayedColumns: string[] = ['Subject', 'Test1', 'Test2', 'Test3', 'Add'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  openDialog(subject) {
    this.dialog.open(DialogComponent, { data: subject }).afterClosed().subscribe(result => {
      console.log(result);

      if (result) {

        for (let i = 0; i < this.user.classes.registered.length; i++) {
          if (result.name == this.user.classes.registered[i].name) {
            this.user.classes.registered[i] = result
            localStorage.setItem("student", JSON.stringify(this.user))

          }
        }

        // this.student.classes.registered.push(result);

        // this.refreshData();
      }
    })

  }

}
