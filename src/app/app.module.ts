import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

// AppModule is kept as a shell for legacy NgModule compatibility.
// All providers have been migrated to src/app/app.config.ts —
// see main.ts for the single bootstrap path.

@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  imports: [],
})
export class AppModule {}
