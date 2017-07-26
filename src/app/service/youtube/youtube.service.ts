import { JitEmitterVisitor } from '@angular/compiler/src/output/output_jit';
import { PlayerService } from '../player/player.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';


@Injectable()
export class YoutubeService {
  private baseUrl = 'https://content.googleapis.com/youtube/v3/';
  private key = 'AIzaSyDItKtteuFaHZJ4kCBb9d4hnb6xPF27QG4';
  private currentPlaylistId = 'PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u';


  constructor(
    private http: Http
    ) {
    
  }

  getRlaylistItemsRequestParams(nextPageToken): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();
    params.set('maxResults', '50');
    params.set('part', 'snippet,contentDetails');
    params.set('playlistId', this.currentPlaylistId);
    params.set('key', this.key);
    if (nextPageToken) {
      params.set('pageToken', nextPageToken)
    }
    return params;
  }

  getPlaylistItems(nextPageToken?): Observable<any> {
    return this.http.get(this.baseUrl + 'playlistItems',
      { search: this.getRlaylistItemsRequestParams(nextPageToken) })
      .concatMap((response: Response) => {
        let result = response.json();
        let partialResponse = result.items;
        let partialResponseObservable = Observable.from(partialResponse);
        let nextPartialResponseObservable = result.nextPageToken
          ? this.getPlaylistItems(result.nextPageToken)
          : Observable.empty();
        return Observable.concat(partialResponseObservable, nextPartialResponseObservable);
      })
      .reduce((acc, item) => acc.concat(item), []);
  };

}
