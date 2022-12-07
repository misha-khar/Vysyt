// all user input lies here
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FormControl, FormGroup } from '@angular/forms';
import { userInputs } from '../userInputs';
import { GlobalVars } from '../global-vars';
import { SharedService } from '../shared.service';
import { RequestParser } from '../request-parser';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnChanges {

  constructor(private sharedService: SharedService) { }

  place;
  // placeType;
  minVal;
  maxVal;

  minValue: number = 0;
  maxValue: number = 4;
  options: Options = {
    floor: 0,
    ceil: 4,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          GlobalVars.globalMinVal = value;
          var str = '';
          for (var i = 0; i <= value; i++) {
            str += '💲';
          }

          return "<b>Min price:</b>" + str;
        case LabelType.High:
          GlobalVars.globalMaxVal = value;
          var str = '';
          for (var i = 0; i <= value; i++) {
            str += '💲';
          }
          return "<b>Max price:</b>" + str;
        default:
          return '💲';
      }
    }
  }

  minValChange() {
    GlobalVars.globalMinVal = this.minValue;
    this.minVal = GlobalVars.globalMinVal;
  }

  maxValChange() {
    GlobalVars.globalMaxVal = this.maxValue;
    this.maxVal = GlobalVars.globalMinVal;
  }

  onClickSubmit(data) {
    GlobalVars.globalPlace = data.place;
    // GlobalVars.globalPlaceType = data.placeType;
    GlobalVars.globalMinVal = data.priceSlider[0];
    GlobalVars.globalMaxVal = data.priceSlider[1];

    try {
      let r = new RequestParser();
      r.setQuery(data.place);
      r.addField('name');
      r.addField('geometry');
      r.sendRequest();
    } catch (error) {
      console.error();
    }

    // alert("submitted")
    this.sharedService.sendClickEvent();
    console.log(data)

  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }



}
