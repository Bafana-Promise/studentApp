import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = {};
  dataSource: any = [];
  classes: {}

  constructor(private router: Router, private dataService: DataService, private dataServ: DataService) { }

  ngOnInit(): void {
    this.user = this.dataService.getStudent();
    console.log(this.user);
    this.dataSource = this.user.classes.registered;
  }
  displayedColumns: string[] = ['Subject', 'Test1', 'Test2', 'Test3'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}








