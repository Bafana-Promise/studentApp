import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  
  @ViewChild('contactForm') contactForm: NgForm;


  constructor(private router: Router) { }


  contact: any;

  ngOnInit() {
  }

  onSubmit(contactForm) {

    let studentObj = contactForm.value;
    studentObj.classes = {
      registered: [],
      deregistered: [],
    }
    if (localStorage.getItem("students") == null) {
      let students = []
      students.push(studentObj);
      localStorage.setItem("students", JSON.stringify(students))

    } else {
      let students = JSON.parse(localStorage.getItem("students"));
      students.push(studentObj);
      localStorage.setItem("students", JSON.stringify(students))

    }

    console.log(studentObj);
  }
  
}