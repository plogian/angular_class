import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	showPage = "Recipes";
	apiKey='';
	authDomain='';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: this.apiKey,
			authDomain: this.authDomain
		});
	}

	changeShowPage(event) {
		this.showPage = event;
	}


}
