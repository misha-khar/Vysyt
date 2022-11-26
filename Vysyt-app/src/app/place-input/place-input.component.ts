import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { userInputs } from '../userInputs';
@Component({
  selector: 'app-place-input',
  templateUrl: './place-input.component.html',
  styleUrls: ['./place-input.component.css']
})


export class PlaceInputComponent {

  input: userInputs;

  log(x) { console.log(x) }

  saveData(){
    alert("hello");
  }


}
