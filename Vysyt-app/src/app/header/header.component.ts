import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dev1 = 'Misha Kharkovski';
  dev2 = 'Zane Zeppuhar';
  dev3 = 'John Pepling';
  dev4 = 'Ibrahim Qutyan';

  constructor() { }

  ngOnInit(): void {
  }

}
