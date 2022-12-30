import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from './global-vars';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }

  place: string;
  lat: number;
  long: number;
  request: string;
  key: string;

  getWeather() {
    this.key = "e5145e005710b6703206bf28d0668ed8";
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + GlobalVars.globalPlace + '&appid=' + this.key + '&units=imperial');
  }

}
