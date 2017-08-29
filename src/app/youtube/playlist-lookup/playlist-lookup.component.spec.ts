import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistLookupComponent } from './playlist-lookup.component';
import { MaterialModule } from "@angular/material";
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { RouterTestingModule } from "@angular/router/testing";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { Http } from "@angular/http";
import { inject} from "@angular/core/testing";
import { By }              from '@angular/platform-browser';
import { data } from "../../testing/data";




class PlayerSrvStub {
  currentChannelPlaylists
}
describe('PlaylistLookupComponent', () => {
  let component: PlaylistLookupComponent;
  let fixture: ComponentFixture<PlaylistLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistLookupComponent ],
      imports: [
        MaterialModule, RouterTestingModule],
        providers: [{provide: PlayerService, useValue: PlayerSrvStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display channel playlists', inject([PlayerService], (srv: PlayerService) => {
    //const srv: PlayerService = fixture.debugElement.injector.get(PlayerService);
    srv.currentChannelPlaylists = data.playlists;
    srv.currentPlaylist = data.playlists[0];
    fixture.detectChanges();
    const playlists = fixture.debugElement.queryAll(By.css('.channel-playlist'))
    expect(playlists.length).toBe(2);
  }))

  it('should navigate by playlist', inject([PlayerService], (srv: PlayerService)=>{

  }))
});
