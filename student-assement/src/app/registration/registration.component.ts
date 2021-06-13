import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('contactForm') contactForm: NgForm;

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  contact: any;

  ngOnInit() {
  }

  onSubmit(form) {
    let studentObj = form.value;
    studentObj.classes = {
      registered: [],
      deregistered: [],
    }
    localStorage.setItem("student", JSON.stringify(studentObj))
  }
}