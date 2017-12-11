import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';

import { APP_ROUTING } from './app.routing';


import { AboutComponent } from './route/about/about.component';
import { ContactComponent } from './route/contact/contact.component';
import { HomeComponent } from './route/home/home.component';

import { HeaderComponent } from './static/header.component';
import { MenuComponent } from './static/menu/menu.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgSemanticModule,
        APP_ROUTING
    ],
    declarations: [
        AboutComponent,
        AppComponent,
        ContactComponent,
        HeaderComponent,
        HomeComponent,
        MenuComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}