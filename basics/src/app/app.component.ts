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
  imgURL = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'

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
