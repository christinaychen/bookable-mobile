import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  donutChart: any;
  // public purchases:Array<Purchases>;

  @ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.purchases = purchasesService.getAllPurchases();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');

    this.donutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Restaurants", "Movies", "Transportation"],
        datasets: [{
          label: "Money Allocation",
          data: [30, 50, 100],
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }

    })
  }


}
