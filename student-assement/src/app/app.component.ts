import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-assement';

  constructor (private router: Router){}

 logout(){
   sessionStorage.clear()
  this.router.navigate(["login"])
 }

}
