import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedInputComponent } from './masked-input.component';

describe('MaskedInputComponent', () => {
  let component: MaskedInputComponent;
  let fixture: ComponentFixture<MaskedInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaskedInputComponent]
    });
    fixture = TestBed.createComponent(MaskedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
