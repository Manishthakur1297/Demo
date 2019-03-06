import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { FirstChildComponent } from './father/first-child/first-child.component';
import { SecondChildComponent } from './father/first-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
