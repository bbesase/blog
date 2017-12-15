import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';

import { APP_ROUTING } from './app.routing';


import { AboutComponent } from './route/about/about.component';
import { ContactComponent } from './route/contact/contact.component';
import { FeedComponent } from './route/feed/feed.component';
import { HomeComponent } from './route/home/home.component';
import { HeaderComponent } from './static/header.component';
import { ItemComponent } from './common/item.component';
import { MenuComponent } from './static/menu/menu.component';
import { PostComponent } from './route/feed/post.component';

import { FeedService } from './route/feed/feed.service';

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
        FeedComponent,
        HeaderComponent,
        HomeComponent,
        ItemComponent,
        MenuComponent,
        PostComponent
    ],
    providers: [
        FeedService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}