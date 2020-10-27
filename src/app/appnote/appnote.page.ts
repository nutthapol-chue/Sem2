import { Component } from '@angular/core';


@Component({
  selector: 'app-appnote',
  templateUrl: 'appnote.page.html',
  styleUrls: ['appnote.page.scss'],
})
export class AppnotePage {
  notes = [];
  datestart;
  dateend;
  topic;
  detail;
  isUpdate;
  ind;
  myDate: String = new Date().toISOString();

  constructor() {

  }
  addNote() {

  }
  updateNote() {

  }
  delNote(detail: any) {

  }
  checkIn(detail: any) {

  }
  clearText() {

  }
  clearStorage() {
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }

  setStorage() {

  }
  getStorage() {
  }
}
