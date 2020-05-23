import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';;
import {FeaturesModule} from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    CoreModule,
    FeaturesModule,
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent],
})
export class AppModule { }
