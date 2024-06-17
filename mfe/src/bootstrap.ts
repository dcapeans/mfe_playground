import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MfeModule } from 'app/app.module';

platformBrowserDynamic().bootstrapModule(MfeModule)
  .catch((err) => console.error(err));
