import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})

export class FlashCardComponent implements OnInit {

  @Input('catIndex') catIndex;


  flipped: boolean = false;
  colors: Array<string> = ['#cfa4f3fa', 'red', 'green', 'orange', 'blue']
  shadow: string;

  constructor() {
    // console.log('Hello FlashCardComponent Component');
    // console.log('le cat index', this.catIndex);
    // console.log('le shadow', this.shadow)
  }

  flip() {
    this.flipped = !this.flipped;
  }

  ngOnInit() {
    console.log("ngoninit", this.catIndex)
    this.shadow = "2px 3px 5px " + this.colors[this.catIndex]
  }




}
