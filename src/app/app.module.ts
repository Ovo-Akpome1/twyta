import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIconComponent } from './components/components-left/app-icon/app-icon.component';
import { HomeComponent } from './components/components-left/home/home.component';
import { ExploreComponent } from './components/components-left/explore/explore.component';
import { NotificationsComponent } from './components/components-left/notifications/notifications.component';
import { MessagesComponent } from './components/components-left/messages/messages.component';
import { BookmarksComponent } from './components/components-left/bookmarks/bookmarks.component';
import { ListsComponent } from './components/components-left/lists/lists.component';
import { ProfileComponent } from './components/components-left/profile/profile.component';
import { MoreComponent } from './components/components-left/more/more.component';
import { TweetComponent } from './components/components-left/tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIconComponent,
    HomeComponent,
    ExploreComponent,
    NotificationsComponent,
    MessagesComponent,
    BookmarksComponent,
    ListsComponent,
    ProfileComponent,
    MoreComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
