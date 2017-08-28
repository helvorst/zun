import { Routes } from '@angular/router';

import { WatchComponent } from "./pages/watch/watch.component";
import { SearchComponent } from "./pages/search/search.component";
import { IsWatchValidService } from "./service/is-watch-valid/is-watch-valid.service";

export const routes: Routes = [
    { path: 'watch/:playlistId', component: WatchComponent, canActivate: [IsWatchValidService] },
    { path: 'watch', component: WatchComponent, canActivate: [IsWatchValidService] },
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: 'watch', pathMatch: 'full' }
]