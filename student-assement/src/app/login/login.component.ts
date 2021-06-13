import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private dataService: DataService, private router: Router) { }

  student: any = {};

  ngOnInit(): void {
    this.student = this.dataService.getStudent()
    console.log(this.student);
    
  }

  submitLogin(contactForm) {
    if(contactForm.value.email == this.student.email && contactForm.value.password == this.student.password){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.snackbar.open('Invalid Login Credentials', "close")
    }
    // console.log(contactForm.value);
    

  }

}
