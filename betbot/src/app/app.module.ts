import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BbHeaderComponent } from './bb-header/bb-header.component';
import { DataEntryComponent } from './data-entry/data-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    BbHeaderComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
