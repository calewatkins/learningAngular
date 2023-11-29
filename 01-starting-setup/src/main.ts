import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { counterReducer } from './app/store/counter.reducer';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
