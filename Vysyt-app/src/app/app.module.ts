import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefreshResultsButtonComponent } from './refresh-results-button/refresh-results-button.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input/user-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OutputTestComponent } from './output-test/output-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { WeatherComponent } from "./weather/weather.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RefreshResultsButtonComponent,
    UserInputComponent,
    OutputTestComponent,
    FooterComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatInputModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
