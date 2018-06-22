import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExpansionsComponent } from './components/expansions/expansions.component';
import { ExpansionComponent } from './components/expansion/expansion.component';

const APP_ROUTES: Routes = [
    { path: 'home',         component: HomeComponent },
    { path: 'about',        component: AboutComponent },
    { path: 'expansions/:termino',   component: ExpansionsComponent },
    { path: 'expansion/:id',   component: ExpansionComponent },
    { path: '**',           pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
