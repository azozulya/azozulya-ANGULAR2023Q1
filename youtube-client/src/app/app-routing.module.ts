import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './youtube/pages/main/main.component';
import { DetailsComponent } from './youtube/pages/details/details.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './auth/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, pathMatch: 'full' },
  { path: 'main/:search', component: MainComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
