import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceInputComponent } from './place-input/place-input.component';
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
import { RequestParserComponent } from './request-parser/request-parser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PriceSliderComponent } from './price-slider/price-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceInputComponent,
    RefreshResultsButtonComponent,
    UserInputComponent,
    RequestParserComponent,
    PriceSliderComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
