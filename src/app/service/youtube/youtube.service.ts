import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';

@Injectable()
export class YoutubeService {
  private baseUrl = 'https://content.googleapis.com/youtube/v3/';
  private key = 'AIzaSyDItKtteuFaHZJ4kCBb9d4hnb6xPF27QG4';


  constructor(private http: Http) {

  }

  getBaseRequestParams(nextPageToken?): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();
    params.set('maxResults', '50');
    params.set('part', 'snippet,contentDetails');
    params.set('key', this.key);
    if (nextPageToken) {
      params.set('pageToken', nextPageToken)
    }
    return params;
  }

  getPlaylistItems(playlistId, nextPageToken?): Observable<any> {
    const params = this.getBaseRequestParams(nextPageToken);
    params.set('playlistId', playlistId);
    return this.http.get(this.baseUrl + 'playlistItems',
      { search: params })
      .concatMap((response: Response) => {
        let result = response.json();
        let partialResponse = result.items;
        let partialResponseObservable = Observable.from(partialResponse);
        let nextPartialResponseObservable = result.nextPageToken
          ? this.getPlaylistItems(playlistId, result.nextPageToken)
          : Observable.empty();
        return Observable.concat(partialResponseObservable, nextPartialResponseObservable);
      })
      .reduce((acc, item) => acc.concat(item), []);
  };

  //get exact name match
  getChannelByName(value): Observable<any> {
    const params = this.getBaseRequestParams();
    const valueFormatted = value.toString().replace(/ /g, '');
    params.set("forUsername", valueFormatted);
    params.set('part', 'snippet');
    return this.http.get(this.baseUrl + 'channels',
      { search: params })
      .map(response => response.json().items);
  }
  //search by name
  searchChannelByName(value): Observable<any> {
    const params = this.getBaseRequestParams();
    const valueFormatted = value.toString().replace(/ /g, '');
    params.set("type", "channel");
    params.set('q', value);
    params.set('part', 'snippet');
    return this.http.get(this.baseUrl + 'search',
      { search: params })
      .map(response => {
        const items = response.json().items;
        return items.map(item => {
          item.id = item.id.channelId;
          return item;
        });
      })
  }

  searchChannel(value: string): Observable<any> {
    return Observable.zip(
      this.getChannelByName(value),
      this.searchChannelByName(value),
      (exactChannels, suggestedChannels) => {
        let result = [];
        if (exactChannels.length > 0) {
          result = result.concat(exactChannels);
        }
        return result.concat(suggestedChannels);
      }
    )
  }

  getChannelPlaylists(channelId): Observable<any> {
    const sortPlaylistsByItem = (a, b) => {
      return b.contentDetails.itemCount - a.contentDetails.itemCount;
    }
    const params = this.getBaseRequestParams();
    params.set("channelId", channelId);
    const etag = "VPWTmrH7dFmi4s1RqrK4tLejnRI/P5G4cZE0CRzQBXA1ExCbewtb6JE";
    const headers = new Headers();
    headers.append('If-None-Match', etag);
    return this.http.get(this.baseUrl + 'playlists',
      {
        headers: headers,
        search: params
      })
      .map(response => response.json().items)
      .map(items => items.sort(sortPlaylistsByItem));
  }

  getInfoOfPlaylist(playlistId): Observable<any> {
    const params = this.getBaseRequestParams();
    params.set("type", "playlist");
    params.set('q', playlistId);
    params.set('part', 'snippet');
    return this.http.get(this.baseUrl + 'search',
      { search: params })
      .map(response => response.json().items.map(item => {
        item.id = item.id.playlistId;
        return item;
      }));
  }

  // getInfoOfChannel(channelId): Observable<any> {
  //   const params = this.getBaseRequestParams();
  //   params.set("type", "channel");
  //   params.set('q', channelId);
  //   params.set('part', 'snippet');
  //   return this.http.get(this.baseUrl + 'search',
  //     { search: params })
  //     .map(response => response.json());
  // }


}
