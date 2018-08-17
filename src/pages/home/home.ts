import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {D} from "@angular/core/src/render3";

import {WeatherProvider} from "../../providers/weather/weather";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  private months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  today = (this.days[new Date().getDay()]);
  month = (this.months[new Date().getMonth()]);
  dayNum = new Date().getDate();
  constructor(
    public navCtrl: NavController,
    public weatherProvider:WeatherProvider) {
    console.log(this.today + ' ' + this.month + ' ' + this.dayNum);


  }

}
