import { makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { GetApiService } from '../get-api.service';


@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})


export class WeatherComponent {
    city = 'Pittsburgh';
    lat = '40.44';
    lon = '79.99';
    current_temp = ' degrees F';
    high_temp = ' degrees F';
    low_temp = ' degrees F';
    weather = '';
    weather_description = '';
    constructor( private api:GetApiService) {

    }
    ngOnInit() {
        this.api.getWeather().subscribe((data)=>{
            console.warn("get weather data", data); 
            this.current_temp = data['main']['temp'] + ' degrees F';
            this.high_temp = data['main']['temp_max'] + ' degrees F';
            this.low_temp = data['main']['temp_min'] + ' degrees F';
            this.weather = data['weather'][0]['main'];
            this.weather_description = data['weather'][0]['description'];
        })
        
    }
}