
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {AppRoutingModule}from'./app.routes';
import { WhyAtsiComponent } from './why-atsi/why-atsi.component';
import { PackageComponent } from './package/package.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WhyAtsiComponent,
        PackageComponent,
        ClientsComponent,
        ContactComponent,
        TestimonialComponent
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
