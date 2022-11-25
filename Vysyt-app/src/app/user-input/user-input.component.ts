import { Component } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FormControl, FormGroup } from '@angular/forms';
import { userInputs } from '../userInputs';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  // place;
  // placeType;
  minValue: number = 1;
  maxValue: number = 4;
  options: Options = {
    floor: 0,
    ceil: 5,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  }
//   ngOnInit() {
//     formdata = new FormGroup({ // this instantiates an input form
//       placeType: new FormControl('city'),
//       place: new FormControl('New York'), // default input for city
//     });
//  }
//   onClickSubmit(data) {
//     this.place = data.place;
//     this.placeType = data.placeType;
//   }
  // onSubmit() {
  //   alert("submitted!")
  //   newRequest: userInputs = new userInputs(this.inputForm.get('place'), this.minValue, this.maxValue, this.inputForm.get('placeType'));
  // }

}
