import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // points to an external html file. 
  templateUrl: './app.component.html', 
  //can apply multiple style sheets to a component.
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  name = 'Tell';
  title = 'basics';
  imgURL = 'https://picsum.photos/id/685/500/500'

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
