import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-masked-input',
  templateUrl: './masked-input.component.html',
  styleUrls: ['./masked-input.component.scss']
})
export class MaskedInputComponent implements OnInit{
    @Input() control: FormControl = new FormControl('');
    @Input() type = 'text';
    @Input() placeholder = '';
    @Input() format = '';

  constructor() { }

  ngOnInit(): void {
    console.log('Format:', this.format);
  }

}
