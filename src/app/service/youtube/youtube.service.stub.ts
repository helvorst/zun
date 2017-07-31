import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Rx';

export class YoutubeServiceStub {
  private currentPlaylistId = 'PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u';
  constructor() { }
  private items = [
    {
      "kind": "youtube#playlistItem",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/vUqFa-eiAcKYrqd5h0syFZsn33U\"",
      "id": "UExMc21iV3NRdUh0UmpYX0pRd0J1U1dhRjNRaWU3QXU3dS5BN0Q0NTk3QTY3NEFDOTE1",
      "snippet": {
        "publishedAt": "2017-07-28T22:29:54.000Z",
        "channelId": "UCsA8KTCYZ7PUvDEhAscOm9w",
        "title": "Delerium - Silence feat. Sarah McLachlan (Above & Beyond's 21st Century Remix)",
        "description": "Remixed in 2004 by Above & Beyond.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Hel Vorst",
        "playlistId": "PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "BhG-Cj_bTV4"
        }
      },
      "contentDetails": {
        "videoId": "BhG-Cj_bTV4",
        "videoPublishedAt": "2011-07-13T13:00:47.000Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/D67Tm2u9AX-Wx4xOOFra38DbIvw\"",
      "id": "UExMc21iV3NRdUh0UmpYX0pRd0J1U1dhRjNRaWU3QXU3dS5GQjMwOTIyMjFDNDRBODY5",
      "snippet": {
        "publishedAt": "2017-07-28T22:27:19.000Z",
        "channelId": "UCsA8KTCYZ7PUvDEhAscOm9w",
        "title": "Delerium feat. Sarah McLachlan - Silence (Tiesto's In Search of Sunrise Remix) [HD]",
        "description": "An immense classic I never, ever get tired of at all (although the outro could've been much longer and much better). Below are the following mixes:\n\n1. Silence (DJ Tiësto In Search Of Sunrise Remix Edit)\n2. Silence (Airscape Remix Edit)\n3. Silence (Album Version Edit)\n4. Silence (Fade Sanctuary Mix Edit)\n5. Silence (DJ Tiësto In Search Of Sunrise Remix)\n6. Silence (Airscape Remix)\n7. Silence (Original Fade Sanctuary Remix)\n8. Silence (Michael Woods Mix)\n9. Silence (Filterheadz Remix)\n10. Silence (Lissat & Voltaxx Remix)\n11. Silence (Lissat & Voltaxx Instrumental Remix)\n12. Silence (Niels Van Gogh vs Thomas Gold Remix Radio Edit)\n13. Silence (Acoustic)\n14. Silence (The Hungary For Breaks Mix)\n15. Silence (Niels Van Gogh Vs Thomas Gold Remix)\n16. Silence (Niels Van Gogh Vs Thomas Gold Dub Mix)\n17. Silence (Tim Le El vs. Micha Moor Rework)\n18. Silence (David Esse & Antoine Clamaran Remix Edit)\n19. Silence (David Esse & Antoine Clamaran Remix)\n20. Silence (Above Beyond's 21st Century Remix)\n21. Silence (W&W vs. Jonas Stenberg Remix)\n22. Silence (DJ Tiësto's In Search Of Sunrise Remix - Patrick Kicken Re-Edit)\n\nI'm not including Sasha and Digweed's Remix at all since it was only featured on the UK version of their non-stop mix 2-CD set of Northern Exposure - Expeditions. Plus, it was never officially released as a full-length single at all (basically, they just added their own elements to Fade's Sanctuary Mix and it sounds okay)\n\nFor those of you who prefer the remixes by Above & Beyond and Airscape, below are the following links:\n\nDelerium Feat. Sarah McLachlan - Silence (Above & Beyond's 21st Century Remix)\nhttps://www.youtube.com/watch?v=flO6awJ78pY\n\nDelerium Feat. Sarah McLachlan - Silence (Airscape Remix)\nhttps://www.youtube.com/watch?v=WcWVI_XWboo\n\nThe progressive house mixes and the breakbeat mixes are not my personal favorites at all.  Enjoy everyone.\n\nNOTE: I do NOT own the rights to this tune. All credits go directly to the original artist.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qycAC_6Bbto/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qycAC_6Bbto/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qycAC_6Bbto/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/qycAC_6Bbto/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/qycAC_6Bbto/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Hel Vorst",
        "playlistId": "PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "qycAC_6Bbto"
        }
      },
      "contentDetails": {
        "videoId": "qycAC_6Bbto",
        "videoPublishedAt": "2011-08-21T20:54:43.000Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/GqijFpCf1zwnDUgmTIFJr2wV1Lk\"",
      "id": "UExMc21iV3NRdUh0UmpYX0pRd0J1U1dhRjNRaWU3QXU3dS5FRDBBQjE3MzdGNDBGMEJE",
      "snippet": {
        "publishedAt": "2017-07-28T21:49:45.000Z",
        "channelId": "UCsA8KTCYZ7PUvDEhAscOm9w",
        "title": "Ten Walls - Walking with Elephants (Original Mix)",
        "description": "|| Buy on  iTunes: http://smarturl.it/tenwalls\n|| Ten Walls\n|| Walking with Elephants\n|| Original Mix\n|| Released by BOSO\n|| Support Artist & Enjoy\n\n► Grab your copy\nhttp://smarturl.it/TenWalls\nhttps://beatport.com/release/walking-with-elephants/1275284\n\n► Ten Walls\nhttps://facebook.com/TenWalls\nhttps://soundcloud.com/tenwallsmusic\n\n► BOSO\nhttps://facebook.com/bososounds\nhttps://soundcloud.com/bosolab\n\n► D1gitalSound\nhttps://facebook.com/D1gitalSound\nhttps://soundcloud.com/D1gitalSound\n\n► Photo by Luis Beltran\nhttp://www.luisbeltran.es/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rymUSbYQjw8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rymUSbYQjw8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rymUSbYQjw8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/rymUSbYQjw8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/rymUSbYQjw8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Hel Vorst",
        "playlistId": "PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "rymUSbYQjw8"
        }
      },
      "contentDetails": {
        "videoId": "rymUSbYQjw8",
        "videoPublishedAt": "2014-04-13T14:16:38.000Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/5V6jiaePAJKOoWZY45dJEk75rk4\"",
      "id": "UExMc21iV3NRdUh0UmpYX0pRd0J1U1dhRjNRaWU3QXU3dS42RjkxMEE5MTI1MzBCOEIw",
      "snippet": {
        "publishedAt": "2017-07-28T15:44:24.000Z",
        "channelId": "UCsA8KTCYZ7PUvDEhAscOm9w",
        "title": "Pete Oak - Only You (Original Mix)",
        "description": "UPDATE:\n\nWe are glad to announce that we've started a new place where you can find all the best and the freshest tracks also you can find latest podcasts & charts from the top Djs.\n \nSubscribe | Like | Share HERE:\n\nhttp://www.youtube.com/user/elementmusichannel\n\nArtist: Pete Oak\nTitle: Slow Groove Sex Moves EP\nGenre: Deep House\nLabel: Sleazy Deep\nDownload: http://www.beatport.com/release/slow-groove-sex-moves-ep/985982\n\nhttp://www.soundcloud.com/sleazydeep\n\nFollow:\nhttp://www.soundcloud.com/pete-oak\nhttp://www.facebook.com/pages/Pete-Oak/222384964482251\n\nSleazy Deep just keeps on delivering the quality! Time & time again, now it's time for us to introduce you to Denmark's finest and Future Sleaze/Sleazy Deep's Hottest new talents Pete Oak. Not many people would of heard about Pete, I've sneakily introduced you to him over Future Sleaze Vol2 with his amazing track \"Alice\" & hot off the heels of his remix of The Way I See. We've clearly saved the best til last here and think after this EP you WILL remember his name. Pete isn't only an amazing producer he's also a great singer/song writer which he's proved with \"Alice\" and with his track \"Hey Boy\" which features on this his Slow Groove Sex Moves EP. Pete's got a super sexy sound, I hear his music and think Finnebassen which can't be a bad thing, however I feel he's got a real unique edge to this sleazy sexy and emotive music. Whatever's in the water up in the Nordic's needs to be bottled and sold quickly as another young breakthrough act is born. We kick off with the sultry Nu Skool 80's disco bomb \"Baby Baby\" that's oozing lush and emotive synths, crisp 707 drums and a killer pitched vocal that's just too sexy, for legal reasons I shan't be mentioning who it is, many a favourites tipple is a good clue though. This track flows and builds beautifully with a knockout bass ready to get any floor shaking from early on to late at night. Next comes \"Only You, I Want You So & Hey Boy\" which are all so good and kicking, very much on the same slow groove sex moves template hence the name of the EP. Rather than telling you about each and every track, I think we should leave this on the great words of Pete Oak himself. More music, less talking.\n\nSupport by: \nRob Made, Finnebassen, Amine Edge, Karmon (Diynamic), H.O.S.H, DJ T, Him_Self_Her, Tough Love, Ajello, Alvaro Marquez Vertiz, Art in Motion, Ben Clarke, Benoit, Bubba, butane, Calin (Catastropic) at Tunnel FM, Candlehouse, Chris Luzz (Manhattan Projject), Chris Massey, Colin Dale, Dakin Auret, Daniel Fernandes, Danijel Savic, Didier Morris, Edu Pinto (Neim), Fabrice, Flavio Acaron, FOG, Fox Glove, Gareth Cortez (Pole Position), Gimenez, Giom, HearThuG, Holic, Hughie Bears, Hugo (Resonance), James Jackson (Defected), James Silk, Justinas Sadauskas (Cream Couture), Leight Morgan, Luis Carrasco, Markus Eden, Martin Virgin (Proper Heat), Max Belobrov, Michael Braybrook, mighty mouse, Nicco (N.D) [Recline/Re-vox], Nico De Ceglia, Nobody Knows, NSFW, Ollie Gibson, Paulo Ricardo, PONY, Rafael Cerato, Richard Dinsdale, Rob Made, Robbie Akbal, Robin Virag, Rocut, Russell Deeks, S.K.A.M, Sahpe, Sam Caterer, Sasch BBC, Search DiP, severinopazetta (horse meat disco), Shlomis (Tunnel FM), Sound Gypsy, Stefan Lange (Das Schöne Leben), Tim Thaler (BLN FM), Tommy Bourne,Tunnel FM, Vincenzo Ciotoli, Wildkats, William Medagli, Xoe Zenia, Zaid Hashmi and many more...\n\n\nIf you are a Copyright holder and don't want certain videos from my channel to be public, please contact me.\n\nThank you.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TTIY2BZzj2w/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TTIY2BZzj2w/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TTIY2BZzj2w/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/TTIY2BZzj2w/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/TTIY2BZzj2w/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Hel Vorst",
        "playlistId": "PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "TTIY2BZzj2w"
        }
      },
      "contentDetails": {
        "videoId": "TTIY2BZzj2w",
        "videoPublishedAt": "2012-11-06T21:31:24.000Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/BrAjVafwyjA8tIrHgCSFXO8rZmM\"",
      "id": "UExMc21iV3NRdUh0UmpYX0pRd0J1U1dhRjNRaWU3QXU3dS4yMUI5NkExNjhCMDc5RjRD",
      "snippet": {
        "publishedAt": "2017-07-28T15:43:35.000Z",
        "channelId": "UCsA8KTCYZ7PUvDEhAscOm9w",
        "title": "Bluford Duck - Shoulder to Cry On (Original Mix)",
        "description": "|| Bluford Duck\n|| Shoulder to Cry On\n|| Original Mix\n|| Released by Jeudi Records\n|| Support Artist & Enjoy\n\n► Grab your copy\nhttps://beatport.com/release/jeudis-friends-ep-vol-3/1158406\nhttps://itunes.apple.com/fr/album/jeudis-friends-ep-vol.-3-jeu/id703238849\n\n► Bluford Duck\nhttps://facebook.com/blufordduck \nhttps://soundcloud.com/blufordduck\n\n► Jeudi Records\nhttps://facebook.com/jeudirecords\nhttps://soundcloud.com/jeudirecords\n\n► D1gitalSound\nhttps://facebook.com/D1gitalSound\nhttps://soundcloud.com/D1gitalSound",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/L4AMO0h02vo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/L4AMO0h02vo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/L4AMO0h02vo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/L4AMO0h02vo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/L4AMO0h02vo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Hel Vorst",
        "playlistId": "PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "L4AMO0h02vo"
        }
      },
      "contentDetails": {
        "videoId": "L4AMO0h02vo",
        "videoPublishedAt": "2013-09-30T10:46:05.000Z"
      }
    }];

  getPlaylistItems(): Observable<any> {
    return Observable.of(this.items);
  };

}
