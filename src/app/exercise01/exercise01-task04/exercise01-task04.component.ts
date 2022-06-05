import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01-task04',
  templateUrl: './exercise01-task04.component.html',
  styleUrls: ['./exercise01-task04.component.css']
})
export class Exercise01Task04Component implements OnInit {
  inputVal = '';
  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;
  buttonColor = '';


  displayInputOnClick(userInput) {
    this.inputVal = userInput;
  }
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
