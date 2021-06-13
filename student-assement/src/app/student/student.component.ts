import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
 
  @ViewChild('contactForm') contactForm: NgForm;


  constructor(private router: Router) { }


  countryList: any[] = [
    { value: 'South Africa', viewValue: 'South Africa' },
    { value: 'Japan', viewValue: 'Japan' },
    { value: 'England', viewValue: 'England' }
  ];

  contact: any;

  ngOnInit() {
    console.log(this.countryList);

    this.setFormValue()
  }

  onSubmit(contactForm) {
    localStorage.setItem("myForm", JSON.stringify(contactForm.value))
    console.log(contactForm.value);
    this.router.navigate(["cvb"])
    // console.log(contactForm);

  }

  setFormValue() {
    this.contact = {
      cellNumber: "0630969857",
      city: "Boksburg",
      country: "England",
      dateOfBirth: "2021-05-04T22:00:00.000Z",
      email: "bafanapromise1@gmail.com",
      firstname: "Promise",
      gender: "male",
      isMarried: "no",
      lastname: "Kopo",
      message: "kljosauj",
      nationality: "Gauteng",
      pincode: "1415",
      street: "18 Esselin Street",

    
    }

    setTimeout(() => { 
      this.contactForm.setValue(this.contact);
    });
  
  }
  
}