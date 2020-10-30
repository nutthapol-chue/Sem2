import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email;
  password;
  error;

  constructor(private afb: AngularFireAuth, private navCtrl: NavController) { }

  ngOnInit() {
  }
  login() {
    this.afb.auth.signInWithEmailAndPassword
      (this.email, this.password)
      .then((res) => {
        console.log("login OK");
        this.navCtrl.navigateForward(['/detail', { uidKey: res.user.uid }]);
      })
      .catch((error: any) => {
        console.log(error);
        this.error = error.message;
        console.log(this.error);
      });

  }

}
