import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  name;
  password;
  email;
  error;

  constructor(private afb: AngularFireAuth, private dbfb: AngularFireDatabase, private navCtrl: NavController) { }

  ngOnInit() {
  }

  createAccount() {
    this.afb.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(
        (res: any) => {
          console.log(res)
          this.afb.auth.currentUser.sendEmailVerification();
          this.dbfb.object(`users/${res.user.uid}/detail`).set({
            name: this.name,
            email: this.email,
          });

          this.navCtrl.navigateForward('/sign-in');
        })
      .catch((error: any) => {
        console.error(error)
        this.error = error.message;
        console.log(this.error);
      });
  }
}