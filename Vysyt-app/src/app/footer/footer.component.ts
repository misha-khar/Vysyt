import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dev1 = 'Misha Kharkovski';
  dev1LI = "https://www.linkedin.com/in/mishakhar/";

  dev2 = 'Zane Zeppuhar';
  dev2LI = "https://www.linkedin.com/in/zane-zeppuhar-849197208/";
  dev3 = 'John Pepling';
  dev3LI = "https://www.linkedin.com/"
  dev4 = 'Ibrahim Qutyan';
  dev4LI = "https://www.linkedin.com/";

  constructor() { }

  ngOnInit(): void {
  }

}
