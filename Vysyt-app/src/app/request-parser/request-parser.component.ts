import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-parser',
  templateUrl: './request-parser.component.html',
  styleUrls: ['./request-parser.component.css']
})
export class RequestParserComponent implements OnInit {
  private _placeArr: string[];
  private _request: Request;

  constructor() { }

  ngOnInit(): void {
  }


}
