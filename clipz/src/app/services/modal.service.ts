import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //root allows us to inject the modal service into other components
})
export class ModalService {
  private visible = false; //tells if the modal is visible or not

  constructor() {}

  // check if the modal is visible
  isModalOpen() {
    return this.visible;
  }

  // toggles the visibility of the modal
  toggleModal() {
    this.visible = !this.visible;
  }
}
