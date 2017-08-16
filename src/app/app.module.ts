import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { PlaylistComponent } from './youtube/playlist/playlist.component';
import { YoutubeService } from './service/youtube/youtube.service';
import { PlayerService } from './service/player/player.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { VideoComponent } from './youtube/video/video.component';
import { PlayerComponent } from './youtube/player/player.component';
import { HeaderComponent } from './common/header/header.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { WatchComponent } from './pages/watch/watch.component';
import { SearchComponent } from './pages/search/search.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { PlayerControlsComponent } from './common/player-controls/player-controls.component';
import { ChannelLookupComponent } from './youtube/channel-lookup/channel-lookup.component';
import { PlaylistLookupComponent } from './youtube/playlist-lookup/playlist-lookup.component';

//import 'jasmine';
//  declare var jasmine
//  jasmine  = require('jasmine');

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    VideoComponent,
    PlayerComponent,
    HeaderComponent,
    VisualisationComponent,
    WatchComponent,
    SearchComponent,
    NavbarComponent,
    PlayerControlsComponent,
    ChannelLookupComponent,
    PlaylistLookupComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    ),
    BrowserModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    YoutubeService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
