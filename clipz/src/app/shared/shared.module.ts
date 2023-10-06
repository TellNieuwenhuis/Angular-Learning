import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { InputComponent } from './input/input.component';
import { provideEnvironmentNgxMask, NgxMaskDirective } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { MaskedInputComponent } from './masked-input/masked-input.component';
//import { ModalService } from '../services/modal.service';



@NgModule({
  declarations: [
    MaskedInputComponent,
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  exports: [
    MaskedInputComponent,
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    
  ],
  providers: [provideEnvironmentNgxMask()],
  //providers: [ModalService]
})
export class SharedModule { }
