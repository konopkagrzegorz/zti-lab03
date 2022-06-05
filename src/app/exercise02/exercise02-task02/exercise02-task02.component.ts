import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02-task02',
  templateUrl: './exercise02-task02.component.html',
  styleUrls: ['./exercise02-task02.component.css']
})
export class Exercise02Task02Component implements OnInit {

  imie = '';
  nazwisko = '';
  wiek = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
