import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

//decorators
@NgModule({ 
  declarations: [
    AppComponent, // this is required as part of he app component import
    PostComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
