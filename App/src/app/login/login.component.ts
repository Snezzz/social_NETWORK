import { Component, OnInit } from '@angular/core';
import { ActiveTabService } from '../active-tab.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activeTabService: ActiveTabService) { }

  ngOnInit() {
  }
  isActiveTab() {
    return this.activeTabService.isActiveTab('profile');
  }

}
