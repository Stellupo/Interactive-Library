import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-library';

  constructor() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEcHqmzwYUXnOymA7oOFcqQ6sXQ-WHZn4",
    authDomain: "interactive-library.firebaseapp.com",
    projectId: "interactive-library",
    storageBucket: "interactive-library.appspot.com",
    messagingSenderId: "664593639742",
    appId: "1:664593639742:web:6d208e66bd951efac1246f",
    measurementId: "G-959D9HS0GM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }


}
