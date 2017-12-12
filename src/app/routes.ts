import { Routes } from '@angular/router';
import { WatchComponent } from "./pages/watch/watch.component";
import { SearchComponent } from "./pages/search/search.component";
import { IsPlaylistLoadedService } from "./service/is-playlist-loaded/is-playlist-loaded.service";
import { WatchValidGuard } from './guard/watch-valid-guard/watch-valid.guard';
import { UrlYTParamsResolver } from './route-resolver/url-params-resolver/url-params.resolver';

export const routes: Routes = [
    {
        path: 'watch/:channelId/:playlistId/:videoId',
        component: WatchComponent,
        canActivate: [WatchValidGuard],
        resolve: { urlData: UrlYTParamsResolver }
    },
    {
        path: 'watch',
        component: WatchComponent,
        canActivate: [WatchValidGuard],
        resolve: { urlData: UrlYTParamsResolver }
    },
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: 'watch', pathMatch: 'full' },
    { path: '**', redirectTo: 'watch'}
]