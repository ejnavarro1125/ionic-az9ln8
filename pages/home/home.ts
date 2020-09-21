import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { round } from 'ionic-angular/components/slides/swiper/swiper-utils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomePage {
watts: number;
consumed: number;
hours: number;
cost: number;
consperday: number;
costperday: number;

  constructor(public navCtrl: NavController) {
  }
  compute() {
    this.consperday = (this.watts * this.hours/1000);
    this.costperday = (this.watts * this.hours/1000*(this.cost))
   
  }

}
