import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, MatSortModule, MatInputModule],
  exports: [MatFormFieldModule, MatButtonModule, MatSortModule, MatInputModule],
})
export class SharedModule {}
