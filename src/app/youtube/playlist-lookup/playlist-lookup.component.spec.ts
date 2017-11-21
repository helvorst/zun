import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistLookupComponent } from './playlist-lookup.component';
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { RouterTestingModule } from "@angular/router/testing";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { Http } from "@angular/http";
import { inject } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { data } from "../../testing/data";
import { Router } from "@angular/router";
import { click } from "../../testing/click";
import { MaterialModule } from '../../material.module';
class RouterStub {
  navigate(url: any):any { 
    return url; 
  };
}

class PlayerSrvStub {
  currentChannelPlaylists;
  setPlaylist(playlist: any) {}
}
describe('PlaylistLookupComponent', () => {
  let component: PlaylistLookupComponent;
  let fixture: ComponentFixture<PlaylistLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistLookupComponent],
      imports: [RouterTestingModule, MaterialModule],
      providers: [{ provide: PlayerService, useClass: PlayerSrvStub },
      { provide: Router, useClass: RouterStub }]
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
    const playlists = fixture.debugElement.queryAll(By.css('.channel-playlist'));
    expect(playlists.length).toBe(2, 'quantity');
    const titles = fixture.debugElement.queryAll(By.css('.channel-playlist-title'));
    titles.map((title, i) => {
      expect(title.nativeElement.textContent).toContain(data.playlists[i].snippet.title, 'correct title');
    })
  }))

  it('should navigate by playlist', inject([PlayerService, Router], (srv: PlayerService, router: Router) => {
    srv.currentChannelPlaylists = data.playlists;
    srv.currentPlaylist = data.playlists[0];
    const spyRouter = spyOn(router, 'navigate');
    const spyPlayerSrv = spyOn(srv, 'setPlaylist');
    fixture.detectChanges();
    const playlists = fixture.debugElement.queryAll(By.css('.channel-playlist-card'));
    const firstplaylist = playlists[0];
    click(firstplaylist);//.triggerEventHandler('click', null);
    expect(spyRouter.calls.count()).toBe(1, 'router  was called once');
    expect(spyRouter.calls.first().args[0].join('/'))
    .toEqual('/watch/' + srv.currentPlaylist.id, 'url is correct');
    expect(spyPlayerSrv.calls.mostRecent().args[0]).toEqual(srv.currentPlaylist);
  }))
});
