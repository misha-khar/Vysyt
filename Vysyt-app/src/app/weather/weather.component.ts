import { makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { GlobalVars } from '../global-vars';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent {

  city = '(City)';
  lat = '';
  lon = '';
  current_temp = '';
  high_temp = '';
  low_temp = '';
  weather = '';
  weather_description = '';
  icon_id = '';
  clickEventsubscription: Subscription;

  constructor(private api: GetApiService, private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {

      this.getApiData();
    })
  }

  ngOnInit() {
    GlobalVars.globalPlace = 'Pittsburgh';
    this.getApiData();
  }

  getApiData() {
    this.api.getWeather().subscribe((data) => {
        // console.log("get weather data", data);
        this.city = GlobalVars.globalPlace;
        this.lat = data['coord']['lat'];
        this.lon = data['coord']['lon'];
        this.current_temp = data['main']['temp'];
        this.high_temp = data['main']['temp_max'];
        this.low_temp = data['main']['temp_min'];
        this.weather = data['weather'][0]['main'];
        this.weather_description = data['weather'][0]['description'];
        this.icon_id = data['weather'][0]['icon'];
    })
  }
}
