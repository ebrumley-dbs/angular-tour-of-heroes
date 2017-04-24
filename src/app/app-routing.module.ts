import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  // When the app starts, it should show the dashboard and display a /dashboard URL in the browser address bar.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // Path: The router matches this route's path to the URL in the browser address bar (heroes).
  // Component: The component that the router should create when navigating to this route (HeroesComponent).
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  // Routing is another name for navigation. The router is the mechanism for navigating from view to view.
  // The forRoot() method supplies the Router service providers and directives needed for routing,
  // and performs the initial navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
