// this is used to communicate between user input and test output
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new Subject<any>();

  sendClickEvent() {
    this.subject.next("hello");
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
