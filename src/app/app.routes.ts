import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

export const ROUTES: Routes = [
  { path: '',      component: SiteLayoutComponent,
  children: [{
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }]},
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent }
];
