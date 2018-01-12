import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthenticationService} from './services/Authentication.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDbFHcped5w-7RzhpxVkqzwvhQJ-xnNSC4",
  authDomain: "login-con-ng4.firebaseapp.com",
  databaseURL: "https://login-con-ng4.firebaseio.com",
  storageBucket: "login-con-ng4.appspot.com",
  messagingSenderId: "271632501443"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
