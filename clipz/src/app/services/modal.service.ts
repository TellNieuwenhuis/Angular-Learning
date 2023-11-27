import { Injectable } from '@angular/core';

interface IModal {
  id: string; // id helps to identify the modal
  visible: boolean; // help an app hide or show a modal
}
@Injectable({
  providedIn: 'root', //root allows us to inject the modal service into other components
})
export class ModalService {
  private modals: IModal[] =[]; //this is an array of modals

  constructor() {}

  register(id: string){
    this.modals.push({id: id, visible: false});
    // console.log(this.modals);
  }

  unregister(id: string){
    this.modals = this.modals.filter(element => element.id!== id); //if the id is found, remove it from the array
  }

  // check if the modal is visible
  isModalOpen(id: string): boolean {
    // can also add  boolean function
    // Boolean(this.modals.find(element => element.id === id)?.visible)
    return !!this.modals.find(element => element.id === id)?.visible
  }

  // toggles the visibility of the modal
  toggleModal(id: string) {
    console.log(`Toggling modal with id: ${id}`);
    const modal = this.modals.find(element => element.id === id);

    if (modal) {
      modal.visible =!modal.visible;
    }
   // this.visible = !this.visible;
  }
}
