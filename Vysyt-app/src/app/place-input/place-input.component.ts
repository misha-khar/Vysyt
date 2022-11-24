import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options, LabelType } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-place-input',
  templateUrl: './place-input.component.html',
  styleUrls: ['./place-input.component.css']
})


export class PlaceInputComponent{

  submit(item:any){
    console.warn(item)
    console.log(this.place)
  }

  place = document.getElementById("placeType");

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

}
