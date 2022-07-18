import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { ButtonTrackDirective } from './shared/directives/og-button-track.directive';
import { NewButtonTrackDirective } from './shared/directives/new-button-track.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonTrackDirective,
    NewButtonTrackDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
