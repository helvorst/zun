import { PlayerServiceStub } from './service/player/player.service.stub';
import { PlayerService } from './service/player/player.service';
import { YoutubeServiceStub } from './service/youtube/youtube.service.stub';
import { YoutubeService } from './service/youtube/youtube.service';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { VideoComponent } from './youtube/video/video.component';
import { HeaderComponent } from './common/header/header.component';
import { PlaylistComponent } from './youtube/playlist/playlist.component';
import { PlayerComponent } from './youtube/player/player.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { WatchComponent } from "./pages/watch/watch.component";
import { SearchComponent } from "./pages/search/search.component";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { PlayerControlsComponent } from "./common/player-controls/player-controls.component";
import { ChannelLookupComponent } from "./youtube/channel-lookup/channel-lookup.component";
import { PlaylistLookupComponent } from "./youtube/playlist-lookup/playlist-lookup.component";
import { PlayerTitleComponent } from "./common/player-title/player-title.component";
import { TooltabComponent } from "./common/tooltab/tooltab.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayerComponent,
        PlaylistComponent,
        HeaderComponent,
        VideoComponent,
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
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
    })
      .overrideComponent(AppComponent, {
        set: {
          providers: [{ provide: YoutubeService, useClass: YoutubeServiceStub },
          { provide: PlayerService, useClass: PlayerServiceStub }]
        }
      })
      .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
