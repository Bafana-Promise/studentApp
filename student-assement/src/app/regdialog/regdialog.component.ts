import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-regdialog',
  templateUrl: './regdialog.component.html',
  styleUrls: ['./regdialog.component.scss']
})

export class RegdialogComponent implements OnInit {

  selectedSubjectName: string = "";

  subjects = [{
    name: "CSS3",
    code: "SCSS",
    marks: []
  },
  {
    name: "JavaScript",
    code: "JavaScript",
    marks: []
  },
  {
    name: "TypeScript",
    code: "TypeScript",
    marks: []
  },
  {
    name: "Angular",
    code: "Angular",
    marks: []
  }];
  constructor(
    public dialogRef: MatDialogRef<RegdialogComponent>
  ) { }

  ngOnInit(): void {
  }

  getValue(subject) {
    let value:any = {};

    // Get selected object by name (value)
    this.subjects.forEach(obj => {
      if(obj['name'] == subject['name']) {
        value = obj;
      }
    });
    
    // Close dialog
    this.dialogRef.close(value);
  }
}
