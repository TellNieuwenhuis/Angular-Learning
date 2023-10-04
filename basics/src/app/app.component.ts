import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // points to an external html file. 
  templateUrl: './app.component.html', 
  //can apply multiple style sheets to a component.
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  name = 'tell nieuwenhuis';
  title = 'basics';
  imgURL = 'https://picsum.photos/id/685/500/500'
  images = [
    'https://picsum.photos/id/685/500/500',
    'https://picsum.photos/id/686/500/500',
    'https://picsum.photos/id/687/500/500',
    'https://picsum.photos/id/688/500/500',
  ]
  currentDate = new Date();
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni','mushrooms', 'onions', 'olives'],
    size: 'large'
  }

  blueClass = false

  fontSize = 16

  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string){
    console.log(event);
  }
}
