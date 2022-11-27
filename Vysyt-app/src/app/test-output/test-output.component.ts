// this is used for test output

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { userInputs } from '../userInputs';
import { GlobalVars } from '../global-vars';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-place-input',
  templateUrl: './test-output.component.html',
  styleUrls: ['./test-output.component.css']
})


export class TestOutputComponent implements OnInit {
  clickEventsubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.showGlobals();
    })
  }

  place: string;
  placeType: string;
  minVal: number;
  maxVal: number;

  ngOnInit() {
  }

  showGlobals() {
    this.place = GlobalVars.globalPlace;
    this.placeType = GlobalVars.globalPlaceType;
    this.minVal = GlobalVars.globalMinVal;
    this.maxVal = GlobalVars.globalMaxVal;
  }


}
