import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] =[
		new Recipe ('orange pie', 'tangy pie with orange', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Peach_mango_pie_%2813978765798%29.jpg/600px-Peach_mango_pie_%2813978765798%29.jpg'),
		new Recipe ('pumpkin pie', 'on the pie theme', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Pumpkin_Pie_from_a_%2Areal%2A_pumpkin%2C_November_2007.jpg')
	];


	constructor() { }

	ngOnInit() {

	}

	onRecipeSelected(recipe: Recipe) {
		this.recipeWasSelected.emit(recipe);
	}

}
