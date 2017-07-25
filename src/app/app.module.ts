import { HttpModule } from '@angular/http';
import { PlaylistComponent } from './youtube/playlist/playlist.component';
import { YoutubeService } from './service/youtube.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { VideoComponent } from './youtube/video/video.component';
import { PlayerComponent } from './youtube/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    VideoComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
