import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
      
  }

  openModal($event: Event) {
    $event.preventDefault(); //prefents the default behavior of the browser

    this.modal.toggleModal('authentication'); // calls the toggleModal method of the modal service
  }

}
