import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ActiveTabService } from './active-tab.service';
import { WallComponent } from './profile/wall/wall.component';
import {ProfileModule} from "./profile/profile.module";
import {ProfileService} from "./profile/profile.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   //ProfileComponent,
    HeaderComponent,
   // WallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      ProfileModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ActiveTabService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
