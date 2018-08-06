import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {D} from "@angular/core/src/render3";
import { AlertController } from 'ionic-angular';
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
  constructor(private alert:AlertController,
    public navCtrl: NavController,
    public weatherProvider:WeatherProvider) {
    console.log(this.today + ' ' + this.month + ' ' + this.dayNum);


  }
  async showAlert(){
    const alert = await this.alert.create({
      //header: 'howdy',
      message: 'You have been warned',
      buttons: ['kl']
    });
    await alert.present();
  }


}
