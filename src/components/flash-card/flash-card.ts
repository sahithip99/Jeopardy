import { Component, Input } from '@angular/core';

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

export class FlashCardComponent {

  @Input('catIndex') catIndex;


  flipped: boolean = false;
  colors: Array<string> = ['#cfa4f3fa', 'red', 'green', 'yellow', 'blue']
  shadow: string;

  constructor() {
    console.log('Hello FlashCardComponent Component');
    this.shadow = "2px 3px 5px " + this.colors[this.catIndex]
  }

  flip() {
    this.flipped = !this.flipped;
  }







}
