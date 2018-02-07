import { Component, OnInit} from '@angular/core';
import { ServersService } from '../servers.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor(private serversService: ServersService, private authService: AuthService) { }

	ngOnInit() {

	}

	onSave() {
		this.serversService.onSaveRecipes()
			.subscribe(
				(response: Response) => {
					console.log(response);
				})
	}

	onFetch() {
		this.serversService.onGetRecipes()
	}

	onLogout() {
		this.authService.logout();
	}
}
