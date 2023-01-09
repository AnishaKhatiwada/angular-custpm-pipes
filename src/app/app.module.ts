import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelperComponent } from './helper/helper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipe/reverse';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelperComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
