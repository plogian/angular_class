import { Component, OnInit} from '@angular/core';
import { ServersService } from '../servers.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	recipes;

	constructor(private serversService: ServersService,
		private recipeService: RecipeService) { }

	ngOnInit() {

	}

	onSave() {
		this.recipes = this.recipeService.getRecipes();
		this.serversService.onSaveRecipes(this.recipes)
			.subscribe(
				(response) => console.log(response)
				);
	}

	onFetch() {
		this.serversService.onGetRecipes()
			.subscribe(
				(response) => console.log(response)
				);
	}
}
