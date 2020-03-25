import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from "@angular/animations";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('changeButton', [
      state('yellow', style({
        transform: 'translateX(100%)'
      })),
      state('orange', style({
        transform: 'translateX(0px)'
      })),
      transition('orange => yellow', animate('300ms ease-in')),
      transition('yellow => orange', animate('300ms ease-in'))
    ])
  ]
})
export class HomePage {

  state: string = 'orange';
  color1: string = '#FF0000'
  color2: string = 'white'

  constructor() {
  }

  change() {
    if(this.state === 'orange') {
      this.state = 'yellow'
      this.color1 = 'white'
      this.color2 = '#FF0000' 
    } else {
      this.state = 'orange'
      this.color1 = '#FF0000'
      this.color2 = 'white'
    }
  }
  
}
