import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { PlaylistComponent } from './youtube/playlist/playlist.component';
import { YoutubeService } from './service/youtube/youtube.service';
import { PlayerService } from './service/player/player.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { PlayerTitleComponent } from './common/player-title/player-title.component';
import { IsPlaylistLoadedService } from "./service/is-playlist-loaded/is-playlist-loaded.service";
import { TooltabComponent } from './common/tooltab/tooltab.component';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { MaterialModule } from './material.module';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { SpeechService } from './service/speech/speech.service';
import { HistoryComponent } from './common/history/history.component';
import { WatchValidGuard } from './guard/watch-valid-guard/watch-valid.guard';
import { UrlYTParamsResolver } from './route-resolver/url-params-resolver/url-params.resolver';

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
    PlaylistLookupComponent,
    PlayerTitleComponent,
    TooltabComponent,
    SpeechRecognitionComponent,
    HistoryComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    ),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    YoutubeService,
    PlayerService,
    WatchValidGuard,
    UrlYTParamsResolver,
    SpeechService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

