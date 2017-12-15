import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchComponent } from './watch.component';
import { PlayerComponent } from "../../youtube/player/player.component";
import { TooltabComponent } from "../../common/tooltab/tooltab.component";
import { VisualisationComponent } from "../../visualisation/visualisation.component";
import { PlayerService } from "../../service/player/player.service";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { YoutubeServiceStub } from "../../service/youtube/youtube.service.stub";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PlayerControlsComponent } from '../../common/player-controls/player-controls.component';
import { MaterialModule } from '../../material.module';
import { HistoryComponent } from '../../common/history/history.component';
import { RouterTestingModule } from '@angular/router/testing';

class PlayerServiceStub {
  constructor() {
    this.currentVideo = {id: 123};
  }
  currentVideo;
  getPlayer() {}
  play() {}
}

describe('WatchComponent', () => {
  let component: WatchComponent;
  let fixture: ComponentFixture<WatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WatchComponent,
        PlayerComponent,
        TooltabComponent,
        VisualisationComponent,
        PlayerControlsComponent,
        HistoryComponent
      ],
      imports: [
        //BrowserAnimationsModule,
        MaterialModule,
        RouterTestingModule
      ],
      providers: [
        //{ provide: YoutubeService, useClass: YoutubeServiceStub },
        { provide: PlayerService, useClass: PlayerServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
