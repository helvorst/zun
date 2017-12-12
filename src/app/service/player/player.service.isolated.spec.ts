import { PlayerService } from "./player.service";
import { YoutubeService } from "../youtube/youtube.service";
import { Observable } from "rxjs/Rx";
import { YoutubeServiceStub } from "../youtube/youtube.service.stub";
import { Http, RequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";

describe('PlayerService', () => {
    let playerSrv: PlayerService;
    let ytSrv: YoutubeService;
    const channel = { id: 0, name: 'channel' };
    const playlist = { id: 0, name: 'playlist' };
    const channelPlaylists = [
        { id: 0, name: "pl1" },
        { id: 2, name: "pl2" }
    ];
    const playlistVideos = [
        { id: 0, value: 'vid0' },
        { id: 1, value: 'vid1' },
        { id: 2, value: 'vid2' }
    ];

    it('should set channel', (done: DoneFn) => {
        const ytSrv = new YoutubeService(new Http(new MockBackend(), new RequestOptions()));
        let router: Router;
        const spy = spyOn(ytSrv, 'getChannelPlaylists')
            .and.returnValue(Observable.of(channelPlaylists).delay(100));
        playerSrv = new PlayerService(ytSrv, router);
        playerSrv.setChannel(channel)
            .subscribe(() => {
                expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
                //expect(spy.calls.mostRecent().returnValue).toBe(Observable.of(channelPlaylists).delay(1));
                expect(playerSrv.currentChannel).toEqual(channel);
                playerSrv.currentChannelPlaylists.map((pl, i) => {
                    expect(pl).toEqual(channelPlaylists[i]);
                })
                done();
            })
    })

    it('should set playlist', () => {
        const ytSrv = new YoutubeService(new Http(new MockBackend(), new RequestOptions()));
        let router: Router;
        const spy = spyOn(ytSrv, 'getPlaylistItems')
            .and.returnValue(Observable.of(playlistVideos));
        playerSrv = new PlayerService(ytSrv, router);
        playerSrv.setPlaylist(playlist);
        expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
        //expect(spy.calls.mostRecent().returnValue).toBe(playlistVideos);
        expect(playerSrv.currentPlaylist).toEqual(playlist);
        playerSrv.currentPlaylistItems.map((item, i) => {
            expect(item).toEqual(playlistVideos[i]);
        })
    })
})