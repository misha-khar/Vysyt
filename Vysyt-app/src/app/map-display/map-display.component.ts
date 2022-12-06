import { Component, OnInit } from '@angular/core';
import { RequestParser } from '../request-parser';
import { GlobalVars } from '../global-vars';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit {

  testComment = "pre-click";
  clickCount = 0;
  city: string;

  clickEventsubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.city = GlobalVars.globalPlace;
      this.updateMap();
    })
  }

  ngOnInit(): void {
    var r = new RequestParser();
  }

  updateMap() {
    this.testComment = "post click"
    this.clickCount++;
    // maybe add code here to update map with locations?
  }

}
