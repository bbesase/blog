import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';

import { APP_ROUTING } from './app.routing';


import { AboutComponent } from './route/about/about.component';
import { HomeComponent } from './route/home/home.component';
import { HeaderComponent } from './static/header.component';

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
        HeaderComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}