
import { Component, OnInit } from '@angular/core';
import { GlobalVars } from './global-vars';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { RequestParser } from './request-parser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Vysyt';

  ngOnInit() {
    let rp = new RequestParser();
  }
}
