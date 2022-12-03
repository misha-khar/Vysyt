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
  city = '';
  lat = '';
  lon = '';
  current_temp = ' degrees F';
  high_temp = ' degrees F';
  low_temp = ' degrees F';
  weather = '';
  weather_description = '';
  clickEventsubscription: Subscription;

  constructor(private api: GetApiService, private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.getApiData();
    })
  }

  ngOnInit() {
  }

  getApiData() {
    this.api.getWeather().subscribe((data) => {
        console.log("get weather data", data);
        this.city = GlobalVars.globalPlace;
        this.lat = data['coord']['lat'];
        this.lon = data['coord']['lon'];
        this.current_temp = data['main']['temp'] + ' degrees F';
        this.high_temp = data['main']['temp_max'] + ' degrees F';
        this.low_temp = data['main']['temp_min'] + ' degrees F';
        this.weather = data['weather'][0]['main'];
        this.weather_description = data['weather'][0]['description'];
    })
  }

}
