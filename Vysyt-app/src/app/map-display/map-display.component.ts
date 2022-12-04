import { Component, OnInit } from '@angular/core';
import { RequestParser } from '../request-parser';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var r = new RequestParser();
  }

}
