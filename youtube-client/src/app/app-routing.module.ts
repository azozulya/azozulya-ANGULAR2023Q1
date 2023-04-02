import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './youtube/pages/main/main.component';
import { DetailsComponent } from './youtube/pages/details/details.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './auth/pages/not-found/not-found.component';
import { LoginGuard } from './auth/guards/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, pathMatch: 'full', canActivate: [LoginGuard] },
  { path: 'main/:search', component: MainComponent, canActivate: [LoginGuard] },
  { path: 'details/:id', component: DetailsComponent, canActivate: [LoginGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
