import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=40.44&lon=79.99&appid=c599db7fa4f1b2d27ac508435f66b61f&units=imperial');
  }
}
