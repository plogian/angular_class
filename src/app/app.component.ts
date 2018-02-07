import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	showPage = "Recipes";

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyBviJ0_8jRtTZE1KStwjP46h320FEtalE4",
			authDomain: "recipe-book-4dfe0.firebaseapp.com"
		});
	}

	changeShowPage(event) {
		this.showPage = event;
	}


}
