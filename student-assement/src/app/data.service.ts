import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  activeClass = [
    {
      id: 1,
      name: 'Maths',
      status: true,
      marks1: 65,
      marks2: 75,
      marks3: 78,
      marks4: "HTML5"
    },
    {
      id: 2,
      name: 'Afrikaans',
      status: false,
      marks1: 50,
      marks2: 87,
      marks3: 68,
      marks4: "CSS3"
    },
    {
      id: 3,
      name: 'Zulu',
      status: true,
      marks1: 97,
      marks2: 87,
      marks3: 78,
      marks4: "JS"
    },
    {
      id: 4,
      name: 'Life Oreintation',
      status: true,
      marks1: 63,
      marks2: 57,
      marks3: 64,
      marks4: "MONGO"
    }
  ]
  filter: string;

  constructor() { }

  getStudent(){
    if( localStorage.getItem("student") ){
      return JSON.parse(localStorage.getItem("student"));
    }

  }
 
  getClassesMarks(){
     return this.activeClass;

  }


}