import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


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
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
