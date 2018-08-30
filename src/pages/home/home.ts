import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: string[] = []
  prices: string[] = []


  constructor(public navCtrl: NavController) {
    this.categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']
    this.prices = ['$100', '$200', '$300', '$400', '$500']
  }

}
