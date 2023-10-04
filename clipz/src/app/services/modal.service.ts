import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visible = false; //tells wether the modal is visible or not

  constructor() { }
}
