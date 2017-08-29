import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ChannelLookupComponent } from "../../youtube/channel-lookup/channel-lookup.component";
import { PlaylistLookupComponent } from "../../youtube/playlist-lookup/playlist-lookup.component";
import { MaterialModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { YoutubeServiceStub } from "../../service/youtube/youtube.service.stub";
import { RouterModule } from "@angular/router";
import { routes } from "../../routes";
import { WatchComponent } from "../watch/watch.component";
import { TooltabComponent } from "../../common/tooltab/tooltab.component";
import { PlayerComponent } from "../../youtube/player/player.component";
import { VisualisationComponent } from "../../visualisation/visualisation.component";
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent,
        PlaylistLookupComponent,
        ChannelLookupComponent,
        WatchComponent,
        PlayerComponent,
        TooltabComponent,
        VisualisationComponent],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: YoutubeService, useClass: YoutubeServiceStub },
      { provide: PlayerService, useClass: PlayerServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
