import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchComponent } from './watch.component';
import { PlayerComponent } from "../../youtube/player/player.component";
import { TooltabComponent } from "../../common/tooltab/tooltab.component";
import { VisualisationComponent } from "../../visualisation/visualisation.component";
import { MaterialModule } from "@angular/material";
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { YoutubeServiceStub } from "../../service/youtube/youtube.service.stub";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('WatchComponent', () => {
  let component: WatchComponent;
  let fixture: ComponentFixture<WatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchComponent,
        PlayerComponent,
        TooltabComponent,
        VisualisationComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
       providers: [{ provide: YoutubeService, useClass: YoutubeServiceStub },
          { provide: PlayerService, useClass: PlayerServiceStub }]
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
