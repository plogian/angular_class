import { Component, OnInit} from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor(private serversService: ServersService) { }

	ngOnInit() {

	}

	onSave() {
		this.serversService.onSaveRecipes()
			.subscribe(
				(response) => console.log(response)
				);
	}

	onFetch() {
		this.serversService.onGetRecipes()
	}
}
