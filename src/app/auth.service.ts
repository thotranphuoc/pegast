import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import { LocalService } from './local.service';
import { iProfile } from './interface/profile.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  WEBSERVICE_URL = 'https://cluboto.net/webservice/service_post.php';

  constructor(
    private httpClient: HttpClient,
    private localService: LocalService
  ) { }

  accountRegister(email: string, password: string) {
    let url = this.WEBSERVICE_URL;;
    let body = new HttpParams({
      fromObject: {
        act: 'register',
        email: email,
        password: password
      }
    })
    return this.httpClient.post(url, body).toPromise()
  }

  

  accountLogin(email: string, pw: string) {
    let url = this.WEBSERVICE_URL;;
    let body = new HttpParams({
      fromObject: {
        act: 'login',
        email: email,
        password: pw
      }
    })
    return this.httpClient.post(url, body).toPromise();
  }

  accountSignUpWithGmail(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result: any) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token, user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  accountLoginWithFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result: any) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(result);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  accountSignUp(username, password) {
    return firebase.auth().createUserWithEmailAndPassword(username, password)
  }

  accountSignIn(username, password) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(username, password).then((res) => {
        console.log(res);
        this.localService.ACCOUNT.isSigned;
        this.localService.ACCOUNT.currentUser = firebase.auth().currentUser;
        // return Promise.resolve()
        let UID = firebase.auth().currentUser.uid;
        return this.profileGet_FB(UID)
      })
        .then((res) => {
          resolve(res);
        })
        .catch(err => reject(err))
    })


  }

  profileGet_FB(ID) {
    return new Promise((resolve, reject) => {
      firebase.firestore().doc('PROFILES/' + ID).get()
        .then((res) => {
          let PRO = <iProfile>res.data();
          this.localService.PROFILE = PRO;
          resolve({ PROFILE: PRO })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  accoutnCurrentUser() {
    this.localService.ACCOUNT.currentUser = firebase.auth().currentUser;
    return firebase.auth().currentUser;
  }

  isSigned() {
    if (firebase.auth().currentUser) return true
    return false;
  }

  accountSignOut() {
    return firebase.auth().signOut();
  }

  accountProfileUpdate() {
    firebase.auth().currentUser
  }

  getCurrentUser() {
    return firebase.auth().currentUser
  }

  profileGet() {
    let UID = this.getCurrentUser().uid;
    return this.profileGet_FB(UID);
  }
}
