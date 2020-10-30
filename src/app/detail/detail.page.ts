import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  uidKey;
  ref: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private route: ActivatedRoute, private dbfb: AngularFireDatabase) {
    this.uidKey = this.route.snapshot.paramMap.get("uidKey");
    console.log(this.uidKey);
    this.ref = this.dbfb.list('users/'+this.uidKey);
    this.items = this.ref.snapshotChanges().pipe(​
      map(changes =>​
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))​
      ));​
  }

  ngOnInit() {
  }

}
