import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire';

import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireDatabase } from '@angular/fire/database';

var firebaseConfig = {
  apiKey: "AIzaSyDRvLQXUuhT9sUuwVVJwDFu7BIjhYUVfVE",
  authDomain: "crested-bonfire-292508.firebaseapp.com",
  databaseURL: "https://crested-bonfire-292508.firebaseio.com",
  projectId: "crested-bonfire-292508",
  storageBucket: "crested-bonfire-292508.appspot.com",
  messagingSenderId: "372167668128",
  appId: "1:372167668128:web:0e9f9237d9090d062534c5",
  measurementId: "G-7N75EZJTMK"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
