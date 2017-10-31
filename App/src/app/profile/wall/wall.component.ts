///<reference path="../profile.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {Notes} from "../walls";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']

})
export class WallComponent implements OnInit {
  constructor(private proService: ProfileService) { }
  notes: Notes[];
  ngOnInit() {
    this.notes = this.proService.getNotes();
  }

}
