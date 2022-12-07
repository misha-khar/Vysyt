import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from './global-vars';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  place:string;
  lat: number;
  long: number;
  request: string;


  getLatLong(place){
    this.request = "http://api.openweathermap.org/geo/1.0/direct?q=" + place + "&limit=1&appid=c599db7fa4f1b2d27ac508435f66b61f";
    return this.http.get(this.request);
    // return this.http.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=c599db7fa4f1b2d27ac508435f66b61f');
  }

  getWeather() {
//<<<<<<< main
    // this.wait(1000);
    //console.log("inside getWeather lat: " + GlobalVars.globalLat + ", lon: " + GlobalVars.globalLon);
    //this.request = "https://api.openweathermap.org/data/2.5/weather?lat=" + GlobalVars.globalLat + "&lon=" + GlobalVars.globalLon + "&appid=c599db7fa4f1b2d27ac508435f66b61f&units=imperial";
    //return this.http.get(this.request);
    // return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid=c599db7fa4f1b2d27ac508435f66b61f&units=imperial');

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + GlobalVars.globalPlace + '&appid=c599db7fa4f1b2d27ac508435f66b61f&units=imperial');
  }

  // wait = (ms) => {
  //   const start = Date.now();
  //   let now = start;
  //   while (now - start < ms) {
  //     now = Date.now();
  //   }
  // }

}
