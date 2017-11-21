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
import { IsWatchValidService } from "./service/is-watch-valid/is-watch-valid.service";
import { PlayerTitleComponent } from './common/player-title/player-title.component';
import { IsPlaylistLoadedService } from "./service/is-playlist-loaded/is-playlist-loaded.service";
import { IsChannelLoadedService } from "./service/is-channel-loaded/is-channel-loaded.service";
import { TooltabComponent } from './common/tooltab/tooltab.component';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { MaterialModule } from './material.module';


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
    TooltabComponent
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
    IsWatchValidService,
    IsPlaylistLoadedService,
    IsChannelLoadedService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

