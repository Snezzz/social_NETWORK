/**
 * Created by Снежа on 30.10.2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {WallComponent} from "./wall/wall.component";



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [ProfileComponent, WallComponent]
})
export class ProfileModule { }
