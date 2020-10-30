import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-appnote',
  templateUrl: 'appnote.page.html',
  styleUrls: ['appnote.page.scss'],
})
export class AppnotePage {
  notes =
    [{
      datestart: "2020-10-20",
      dateend: "2020-10-23",
      topic: "Midterm exam",
      detail: "Midterm exam 2/63 "
    }];
  datestart;
  dateend;
  topic;
  detail;
  isUpdate;
  ind;
  myDate: String = new Date().toISOString();

  constructor(private storage: Storage) {
    this.getStorage();



  }
  addNote() {
    this.notes = this.notes || [];
    this.notes.push(
      {
        datestart: this.datestart,
        dateend: this.dateend,
        topic: this.topic,
        detail: this.detail
      });
    console.log(this.notes)

    this.setStorage();
  }
  updateNote() {
    this.notes[this.ind].datestart = this.datestart;
    this.notes[this.ind].dateend = this.dateend;
    this.notes[this.ind].topic = this.topic;
    this.notes[this.ind].detail = this.detail;
    this.setStorage();
  }
  delNote(detail: any) {
    console.log(this.detail)
    this.ind = this.notes.findIndex(
      obj => obj.detail == detail);
    console.log(this.ind);
    this.notes.splice(this.ind, 1);

  }
  checkIn(detail: any) {
    this.isUpdate = true;
    this.ind = this.notes.findIndex(
      obj => obj.detail == detail);
    console.log(this.ind);
    this.datestart = this.notes[this.ind].datestart;
    this.dateend = this.notes[this.ind].dateend;
    this.topic = this.notes[this.ind].topic;
    this.detail = this.notes[this.ind].detail;
  }
  clearText() {

  }
  clearStorage() {
    this.storage.clear('notes');
    this.getStorage();

  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getStorage();
    }, 500);
  }

  setStorage() {
    this.storage.ready().then(() => {
      this.storage.set("notes", this.notes);
    });
  }

  getStorage() {
    this.storage.ready().then(() => {
      this.storage.get("notes").then((val) => {
        this.notes = val;
        console.log(this.notes);
      });
    });
  }
}
