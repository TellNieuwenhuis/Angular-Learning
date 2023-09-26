// this browswer function is JIT(just in time) this is older and slower than AOT (Ahead of Time)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 

// this is the AOT function
// import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
