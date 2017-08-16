import { Routes } from '@angular/router';

import { WatchComponent } from "./pages/watch/watch.component";
import { SearchComponent } from "./pages/search/search.component";

export const routes: Routes = [
    { path: 'watch', component: WatchComponent },
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full' }
]