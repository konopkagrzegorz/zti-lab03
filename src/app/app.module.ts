import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exercise01Task01Component } from './exercise01/exercise01-task01/exercise01-task01.component';
import { Exercise01Task02Component } from './exercise01/exercise01-task02/exercise01-task02.component';
import { Exercise01Task03Component } from './exercise01/exercise01-task03/exercise01-task03.component';
import { Exercise01Task04Component } from './exercise01/exercise01-task04/exercise01-task04.component';
import { Exercise02Task01Component } from './exercise02/exercise02-task01/exercise02-task01.component';
import { Exercise02Task02Component } from './exercise02/exercise02-task02/exercise02-task02.component';
import { Exercise02Task03Component } from './exercise02/exercise02-task03/exercise02-task03.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise01Task01Component,
    Exercise01Task02Component,
    Exercise01Task03Component,
    Exercise01Task04Component,
    Exercise02Task01Component,
    Exercise02Task02Component,
    Exercise02Task03Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
