import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  private data = 'weather';
  private url = 'http://api.openweathermap.org/data/2.5/'+this.data+'?id=524901&APPID=';
  private key ='584ad5e3b65d3d4f855a47012643c047';
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    //console.log(this.mGetWeather());
    this.mGetWeather();
  }
  mGetWeather(){
    return this.http.get(this.url+this.key).map(res => res.json()).subscribe(weather=>{
      console.log(weather);
    });
  };
}
