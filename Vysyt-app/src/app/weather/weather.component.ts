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
//<<<<<<< main
  // city = 'Pittsburgh';
  //lat: number;
  //long: number;
  //place: string;
  //current_temp = '';
  //high_temp = '';
  //low_temp = '';
//=======
  city = '';
  lat = '';
  lon = '';
  current_temp = ' degrees F';
  high_temp = ' degrees F';
  low_temp = ' degrees F';
//>>>>>>> weather-integration
  weather = '';
  weather_description = '';
  clickEventsubscription: Subscription;

  constructor(private api: GetApiService, private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
//<<<<<<< main
      // this.getLatLong();
      // this.wait(1000);
      //this.showWeatherData();
      // this.showWeatherData();
//=======
      this.getApiData();
//>>>>>>> weather-integration
    })
  }

  ngOnInit() {
  }

//<<<<<<< main
  //getLatLong() {
    // this.wait(1000);
    //this.place = GlobalVars.globalPlace;
    //this.api.getLatLong(this.place).subscribe((data) => {
      //console.warn("get coord data", data);
      //GlobalVars.globalLat = data[0]['lat'];
      //GlobalVars.globalLon = data[0]['lon'];
      //console.log("lat: " + GlobalVars.globalLat + "    long: " + GlobalVars.globalLon);

    //})
    // this.wait(1000);
  //}

  //showWeatherData() {
    //this.getLatLong();
    //this.place = GlobalVars.globalPlace;
    //this.api.getWeather().subscribe((data) => {
      //console.warn("get weather data", data);
      //this.current_temp = data['main']['temp'] + '° F';
      //this.high_temp = data['main']['temp_max'] + '° F';
      //this.low_temp = data['main']['temp_min'] + '° F';
      //this.weather = data['weather'][0]['main'];
      //this.weather_description = data['weather'][0]['description'];
    //})
  //}

  //wait = (ms) => {
    //const start = Date.now();
    //let now = start;
    //while (now - start < ms) {
      //now = Date.now();
    //}
//=======
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
        this.getIcon();
    })
  }

  getIcon() {

//>>>>>>> weather-integration
  }

}
