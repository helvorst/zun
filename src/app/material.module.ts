import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule],
  exports: [
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class MaterialModule { }