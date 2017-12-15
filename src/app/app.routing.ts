import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './route/about/about.component';
import { ContactComponent } from './route/contact/contact.component';
import { HomeComponent } from './route/home/home.component';
import { FeedComponent } from './route/feed/feed.component';
import { PostComponent } from './route/feed/post.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'aboutme',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'feed',
        component: FeedComponent
    },
    {
        path: 'feed/:id',
        component: PostComponent
    }
]);