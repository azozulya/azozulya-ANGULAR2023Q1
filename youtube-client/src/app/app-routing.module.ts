import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './youtube/pages/details/details.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './auth/pages/not-found/not-found.component';
import { LoginGuard } from './auth/guards/login.guard';
import { MainComponent } from './youtube/pages/main/main.component';
import { AdminComponent } from './auth/pages/admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: LoginComponent,
  },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: AdminComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    component: DetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '404',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: NotFoundComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
