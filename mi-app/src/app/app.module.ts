import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAg6i6GbuMmCYxGzt5-3DRlMguNxPWKJCk",
  authDomain: "ng-notas-a09e9.firebaseapp.com",
  databaseURL: "https://ng-notas-a09e9.firebaseio.com",
  storageBucket: "ng-notas-a09e9.appspot.com",
  messagingSenderId: '261389237975'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
