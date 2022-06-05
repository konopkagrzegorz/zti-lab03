import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02-task03',
  templateUrl: './exercise02-task03.component.html',
  styleUrls: ['./exercise02-task03.component.css']
})
export class Exercise02Task03Component implements OnInit {

  imie = '';
  nazwisko = '';
  wiek = 20;

  constructor() { }

  ngOnInit(): void {
  }

  displayStudentData() {

  }

  resetStudentInput() {
    
  }

}
