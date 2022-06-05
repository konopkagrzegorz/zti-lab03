import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01-task03',
  templateUrl: './exercise01-task03.component.html',
  styleUrls: ['./exercise01-task03.component.css']
})
export class Exercise01Task03Component implements OnInit {
  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;
  buttonColor = '';

  onFocusResetButtonColor() {
    this.buttonColor = '';
  }
  changeColor() {
    this.buttonColor = 'change-color';
  }
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
