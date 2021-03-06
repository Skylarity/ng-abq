import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PostsComponent } from './posts/posts.component';

import { EventService } from './events/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    NewsComponent,
    SignInComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      }
    ])
  ],
  providers: [EventService],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInComponent
  ]
})
export class AppModule { }
