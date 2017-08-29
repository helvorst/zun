import { Routes } from '@angular/router';

import { WatchComponent } from "./pages/watch/watch.component";
import { SearchComponent } from "./pages/search/search.component";
import { IsWatchValidService } from "./service/is-watch-valid/is-watch-valid.service";
import { IsChannelLoadedService } from "./service/is-channel-loaded/is-channel-loaded.service";
import { IsPlaylistLoadedService } from "./service/is-playlist-loaded/is-playlist-loaded.service";


export const routes: Routes = [
    {
        path: 'watch/:playlistId', 
        component: WatchComponent,
        resolve: {
            channel: IsChannelLoadedService,
            items: IsPlaylistLoadedService           
        }
    },
    { path: 'watch', component: WatchComponent, canActivate: [IsWatchValidService] },
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: 'watch', pathMatch: 'full' }
]