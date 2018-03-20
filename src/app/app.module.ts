
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {AppRoutingModule}from'./app.routes';
import { WhyAtsiComponent } from './why-atsi/why-atsi.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WhyAtsiComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
