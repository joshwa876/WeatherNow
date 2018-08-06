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
  static weatherData: any;
  private weatherData: { icon: any; temp: any; pressure: any; humidity: any; wind_speed: any; wind_direction: any; sunset: any; sunrise: any; };
  private data = 'weather';
  private lat = 55.75;
  private lon = 37.62;
  private url = 'http://api.openweathermap.org/data/2.5/'+this.data+'?lat='+this.lat+'&lon='+this.lon+'&APPID=';
  private key ='584ad5e3b65d3d4f855a47012643c047';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    let x;
    this.obj=this.mGETwd(x);
    console.log('Obj',this.obj);
  }
 //

  private mGETwd(dataA){

    return  fetch(this.url+this.key)
      .then(resp=>resp.json())
      .then(data=>dataA={

        icon:'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png',
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        wind_direction: data.wind.deg,
        sunset: new Date(data.sys.sunset),
        sunrise: new Date(data.sys.sunrise)});
      //.catch(error=>console.log(error));
  }
  private obj:any;

  private mGetData(data){
    data.icon = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
    this.obj ={
      icon:data.icon,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      wind_direction: data.wind.deg,
      sunset: data.sys.sunset,
      sunrise: data.sys.sunrise
    };
    console.log('NUff',this.obj);
    //return this.obj;
  }


  setWeatherData(obj){
    this.weatherData = obj;
  }
  getWeatherData(){
    return this.weatherData;
  }

  /*mGetWeather(){
    return fetch(this.url+this.key).then((x)=>{
      console.log(x);
    }).catch(error=>console.log(error))
    //return this.http.get(this.url+this.key).map(res => res.json()).subscribe(weather=>{
      //console.log(weather);
    //});}*/

}
