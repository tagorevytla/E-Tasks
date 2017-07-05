import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDzV2z-aKfiheUEBNG61Cm91PeOiYGwxcY'
    })
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
