import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './modules/shared/store';
import { HomeComponent } from './modules/home/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PhotoEffects } from './modules/shared/store/effects/photo.effects';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PhotoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
