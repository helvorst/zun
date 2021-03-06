import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistLookupComponent } from './playlist-lookup.component';
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { RouterTestingModule } from "@angular/router/testing";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { Http } from "@angular/http";
import { inject } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { playlists } from "../../testing/data.playlists";
import { Router } from "@angular/router";
import { click } from "../../testing/click";
import { MaterialModule } from '../../material.module';
import { YoutubeServiceStub } from '../../service/youtube/youtube.service.stub';
import { Observable } from 'rxjs/Observable';
import { videos } from '../../testing/data.videos';

// stubs 
class RouterStub {
  navigate(url: any): any {
    return url;
  };
}
class PlayerSrvStub {
  currentChannelPlaylists;
  currentChannel;
  currentVideo;
  setPlaylist(playlist: any): Observable<any> {
    return Observable.of(videos);
  }
  url(url) {
    return url;
  }
}


describe('PlaylistLookupComponent', () => {
  let component: PlaylistLookupComponent;
  let fixture: ComponentFixture<PlaylistLookupComponent>;
  let playerSrv: PlayerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistLookupComponent],
      imports: [RouterTestingModule, MaterialModule],
      providers: [
        { provide: PlayerService, useClass: PlayerSrvStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistLookupComponent);
    component = fixture.componentInstance;
    playerSrv = TestBed.get(PlayerService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });



  // it('should display channel playlists', inject([PlayerService], (srv: PlayerService) => {
  //   //const srv: PlayerService = fixture.debugElement.injector.get(PlayerService);
  //   srv.currentChannelPlaylists = playlists.items;
  //   srv.currentPlaylist = playlists.items[0];
  //   fixture.detectChanges();
  //   const renderedPlaylists = fixture.debugElement.queryAll(By.css('.channel-playlist'));
  //   expect(renderedPlaylists.length).toBe(2, 'quantity');
  //   const titles = fixture.debugElement.queryAll(By.css('.channel-playlist-title'));
  //   titles.map((title, i) => {
  //     expect(title.nativeElement.textContent).toContain(playlists.items[i].snippet.title, 'correct title');
  //   })
  // }))

  it('should navigate to video', (done) => {
    const setPlaylistSpy = spyOn(playerSrv, 'setPlaylist').and.returnValue(Observable.of(videos.items));
    const spyUrl = spyOn(playerSrv, 'url');
    playerSrv.currentChannelPlaylists = playlists.items;
    playerSrv.currentPlaylist = playlists.items[0];
    fixture.detectChanges();
    const renderedPlaylists = fixture.debugElement.queryAll(By.css('.channel-playlist-card'));
    const firstplaylist = renderedPlaylists[0];
    click(firstplaylist);
    expect(setPlaylistSpy.calls.count()).toBe(1);

    // #1 
    // playerSrv.setPlaylist(playerSrv.currentPlaylist).subscribe(() => {
    //   expect(spyUrl.calls.count()).toBe(1, 'spyUrl was called'); 
    //   done();
    // });

    //#2 => not called
    // setPlaylistSpy.calls.mostRecent().returnValue.subscribe((items) => {
    //   fixture.detectChanges(); // update view with quote
    //   expect(spyUrl.calls.count()).toBe(1, 'spyUrl was called');
    //   done();
    // });

    //#3 => 
    // fixture.detectChanges();  
    // fixture.whenStable().then(() => { // wait for async 
    //   fixture.detectChanges();        // update view with quote
    //   expect(spyUrl.calls.count()).toBe(1, 'spyUrl was called');
    // });

    done();

  })

  // it('should navigate by playlist', (done) => {
  //   (inject([PlayerService], (srv: PlayerService) => {
  //   srv.currentChannelPlaylists = playlists.items;
  //   srv.currentPlaylist = playlists.items[0];
  //   srv.currentChannel = {id: 'abc'};
  //   srv.currentVideo = {id : videos.items[0].id};
  //   const spySetPlaylist = spyOn(srv, 'setPlaylist');
  //   const spyUrl = spyOn(srv, 'url');
  //   fixture.detectChanges();
  //   const renderedPlaylists = fixture.debugElement.queryAll(By.css('.channel-playlist-card'));
  //   const firstplaylist = renderedPlaylists[0];
  //   click(firstplaylist);//.triggerEventHandler('click', null);
  //   expect(spySetPlaylist.calls.count()).toBe(1, 'setPlaylist was called');
  //   // fixture.whenStable().then(() => { // wait for async 
  //   //   fixture.detectChanges();        // update view with quote
  //   //   expect(spyUrl.calls.count()).toBe(1, 'spyUrl was called');
  //   //   expect(spyUrl.calls.mostRecent().args[0]).toEqual(srv.currentVideo.id);
  //   // });

  //   spySetPlaylist.calls.mostRecent().returnValue.then(() => {
  //     fixture.detectChanges(); // update view with quote
  //     expect(spyUrl.calls.count()).toBe(1, 'spyUrl was called');
  //     done();
  //   });
  //   }))()


  //   // expect(spyRouter.calls.count()).toBe(1, 'router  was called once');
  //   // expect(spyRouter.calls.first().args[0].join('/'))
  //   //   .toEqual('/watch/' + [srv.currentChannel.id, srv.currentPlaylist.id, srv.currentVideo.id].join('/'), 'url is correct');
  //   // expect(spyPlayerSrv.calls.mostRecent().args[0]).toEqual(srv.currentChannel.id);
  //   // expect(spyPlayerSrv.calls.mostRecent().args[1]).toEqual(srv.currentPlaylist.id);
  //   // expect(spyPlayerSrv.calls.mostRecent().args[2]).toEqual(srv.currentVideo.id);
  // })
});
