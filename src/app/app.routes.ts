import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'video',
    component: VideoComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
