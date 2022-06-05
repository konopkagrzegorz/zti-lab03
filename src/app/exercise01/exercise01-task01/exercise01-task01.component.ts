import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01-task01',
  templateUrl: './exercise01-task01.component.html',
  styleUrls: ['./exercise01-task01.component.css'],
})
export class Exercise01Task01Component implements OnInit {
  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;
  zmienUstawienia() {
    this.isDisabled = false;
  }
  onFocus() {
    this.zmienKolor = 'color-brown';
  }
  onClick(event) {
    console.log(event);
  }
  onMouseMove(event) {
    console.log('punktX: ' + event.clientX + ' punktY: ' + event.clientY);
  }
  onPaste() {
    this.inputText = 'Wklejanie zabronione!';
  }

  constructor() {}

  ngOnInit(): void {}
}
