import {Injectable} from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()

export class AuthenticationService{
    constructor(public afAuth: AngularFireAuth){
        
    }
    login(){
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      }
}
