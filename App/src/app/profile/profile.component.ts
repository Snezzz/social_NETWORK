import { Component, OnInit } from '@angular/core';
import {ProfileService} from "./profile.service";
import {Profile} from "./profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  information: Profile[];
  constructor(private informService: ProfileService  ) { }
  ngOnInit() {
    this.information = this.informService.getInformation();
  }
}
