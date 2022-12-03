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

  clickEventsubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.showMap();
    })
  }

  showMap(){


  }

  ngOnInit(): void {
    var r = new RequestParser();
  }

}
