import { Component, Input, EventEmitter, Output, OnInit, 
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements 
OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('Img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>();

  constructor() { 
    console.log('constructor() called', this.postImg);
  }
  //!!========Lifcycle Hooks==================
  //OnInit is a callback method that is invoked immediately after the default 
  //change detector has checked the directive's data-bound properties 
  //for the first time, and before any of the view or content children 
  //have been checked. It is invoked only once when the directive is instantiated.
  ngOnInit(){
    console.log('ngOnInit() called', this.postImg);
  }

  //A callback method that is invoked immediately after the default change 
  //detector has checked data-bound properties if at least one has changed, 
  //and before the view and content children are checked.
  ngOnChanges(){
    console.log('ngOnChanges() called');
  }

  //A callback method that performs change-detection, invoked after the default 
  //change-detector runs. See KeyValueDiffers and IterableDiffers for implementing 
  //custom change checking for collections.
  ngDoCheck(){
    console.log('ngDoCheck() called');
  }

  //A callback method that is invoked immediately after Angular has completed 
  //initialization of all of the directive's content. It is invoked only once
  // when the directive is instantiated.
  ngAfterContentInit(){
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() called');
  } 

  ngOnDestroy(){
    console.log('ngOnDestroy() called');
  }

  constructor() { 
    console.log('constructor() called', this.postImg);
  }
  //!!========Lifcycle Hooks==================
  //OnInit is a callback method that is invoked immediately after the default 
  //change detector has checked the directive's data-bound properties 
  //for the first time, and before any of the view or content children 
  //have been checked. It is invoked only once when the directive is instantiated.
  ngOnInit(){
    console.log('ngOnInit() called', this.postImg);
  }

  //A callback method that is invoked immediately after the default change 
  //detector has checked data-bound properties if at least one has changed, 
  //and before the view and content children are checked.
  ngOnChanges(){
    console.log('ngOnChanges() called');
  }

  //A callback method that performs change-detection, invoked after the default 
  //change-detector runs. See KeyValueDiffers and IterableDiffers for implementing 
  //custom change checking for collections.
  ngDoCheck(){
    console.log('ngDoCheck() called');
  }

  //A callback method that is invoked immediately after Angular has completed 
  //initialization of all of the directive's content. It is invoked only once
  // when the directive is instantiated.
  ngAfterContentInit(){
    console.log('ngAfterContentInit() called');
  }

  //A callback method that is invoked immediately after the default change 
  //detector has completed checking all of the directive's content.
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked() called');
  }

  //A callback method that is invoked immediately after Angular has completed 
  //initialization of a component's view. It is invoked only once when the view is instantiated.
  ngAfterViewInit(){
    console.log('ngAfterViewInit() called');
  }

  //A callback method that is invoked immediately after the default change detector 
  //has completed one change-check cycle for a component's view.
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() called');
  } 

  //A callback method that performs custom clean-up, invoked immediately before a 
  //directive, pipe, or service instance is destroyed.
  ngOnDestroy(){
    console.log('ngOnDestroy() called');
  }
}
