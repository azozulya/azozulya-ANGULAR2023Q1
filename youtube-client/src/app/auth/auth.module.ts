import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from '../youtube/pages/admin/admin.component';

@NgModule({
  declarations: [LoginComponent, AdminComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule],
})
export class AuthModule {}
