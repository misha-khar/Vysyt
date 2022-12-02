// all user input lies here
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FormControl, FormGroup } from '@angular/forms';
import { userInputs } from '../userInputs';
import { GlobalVars } from '../global-vars';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnChanges {

  constructor(private sharedService:SharedService) { }

  place;
  // placeType;
  minVal;
  maxVal;

  minValue: number = 0;
  maxValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 5,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          GlobalVars.globalMinVal = value;
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          GlobalVars.globalMaxVal = value;
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  }

  minValChange(){
    GlobalVars.globalMinVal = this.minValue;
    this.minVal = GlobalVars.globalMinVal;
  }

  maxValChange(){
    GlobalVars.globalMaxVal = this.maxValue;
    this.maxVal = GlobalVars.globalMinVal;
  }

  onClickSubmit(data) {
    GlobalVars.globalPlace = data.place;
    // GlobalVars.globalPlaceType = data.placeType;
    GlobalVars.globalMinVal = data.priceSlider[0];
    GlobalVars.globalMaxVal = data.priceSlider[1];
    alert("submitted")
    this.sharedService.sendClickEvent();
    console.log(data)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


}
