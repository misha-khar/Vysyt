import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaceInputComponentComponent } from './place-input-component/place-input-component.component';
import { SubmitButtonComponentComponent } from './submit-button-component/submit-button-component.component';
import { PriceSliderComponentComponent } from './price-slider-component/price-slider-component.component';
import { RefreshResultsButtonComponentComponent } from './refresh-results-button-component/refresh-results-button-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { TestOutputComponentComponent } from './test-output-component/test-output-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceInputComponentComponent,
    SubmitButtonComponentComponent,
    PriceSliderComponentComponent,
    RefreshResultsButtonComponentComponent,
    HeaderComponentComponent,
    TestOutputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
