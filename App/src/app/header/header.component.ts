import { Component, OnInit } from '@angular/core';
import { ActiveTabService } from '../active-tab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private activeTabService: ActiveTabService) { }

  ngOnInit() {
  }
  isActiveTab() {
    return this.activeTabService.isActiveTab('profile');
  }

}
