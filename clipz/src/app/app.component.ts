import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal = true

  constructor(public modal: ModalService) { }
  
  ngOnInit() {
    setInterval(() => this.showModal = !this.showModal, 1000)
    console.log(this.modal.modals)
  }
}
