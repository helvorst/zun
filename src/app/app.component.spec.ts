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
import { MaterialModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayerComponent,
        PlaylistComponent,
        HeaderComponent,
        VideoComponent,
        VisualisationComponent
      ],
      imports: [MaterialModule],
    })
    .overrideComponent(AppComponent, {
      set: {
        providers: [{provide: YoutubeService, useClass: YoutubeServiceStub},
        {provide: PlayerService, useClass: PlayerServiceStub}]
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
