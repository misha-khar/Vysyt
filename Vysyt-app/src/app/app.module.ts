import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceInputComponent } from './place-input/place-input.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { RefreshResultsButtonComponent } from './refresh-results-button/refresh-results-button.component';
import { HeaderComponent } from './header/header.component';
import { TestOutputComponent } from './test-output/test-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceInputComponent,
    SubmitButtonComponent,
    PriceSliderComponent,
    RefreshResultsButtonComponent,
    TestOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
