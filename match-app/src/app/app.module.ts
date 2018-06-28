import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ResultAppComponent } from './result-app/result-app.component';
import { HeaderComponent } from './header/header.component';
import { AllComponent } from './all/all.component';

import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ResultAppComponent,
    HeaderComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
