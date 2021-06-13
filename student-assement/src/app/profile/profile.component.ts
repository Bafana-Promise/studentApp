import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  
  student: any = {};
  contact: any;
  updateStudent: any = {};

  constructor(private router: Router) { }

  genderArray = ["Male","Female"]
 
  ngOnInit() {

  }

  // this.dialog.open(RegdialogComponent).afterClosed().subscribe(result => {
  //   // check if with the entered ID exist

  //   // we need to push the class object into the student class array
  //   this.student.classes.registered.push(result);
  //   localStorage.setItem("student", JSON.stringify(this.student))
  //   this.refreshData();
  // })

  onSubmit(form) {
    let studentObj = form.value;
  
    this.updateStudent = JSON.parse(localStorage.getItem("student"));
    this.updateStudent.studentObj
    

    // this.student.sub
    // localStorage.setItem("student", JSON.stringify(studentObj))
    console.log(this.updateStudent);

  }

  
}