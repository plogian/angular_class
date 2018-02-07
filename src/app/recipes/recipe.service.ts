import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] =[
		new Recipe (
			'orange pie', 
			'tangy pie with orange', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Peach_mango_pie_%2813978765798%29.jpg/600px-Peach_mango_pie_%2813978765798%29.jpg',
			[
				new Ingredient ('Orange', 1),
				new Ingredient ('Flour', 3)

			]),
		new Recipe (
			'pumpkin pie', 
			'on the pie theme', 
			'https://upload.wikimedia.org/wikipedia/commons/5/5c/Pumpkin_Pie_from_a_%2Areal%2A_pumpkin%2C_November_2007.jpg',
			[
				new Ingredient ('Pumpkin', 2),
				new Ingredient ('Flour', 3)

			]),
	];

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();  //add slice, so we only get a copy of the array, so we can't make changes directly
	}

	getRecipe(index: number) {
		return this.recipes[index]
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}