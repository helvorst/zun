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
    VisualisationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    YoutubeService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
