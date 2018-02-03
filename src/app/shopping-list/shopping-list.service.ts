import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Oranges', 10),
	];

	getIngredient() {
		return this.ingredients.slice(); 
	}

	getIngredientByIndex(index:number) {
		return this.ingredients[index];
	}

	addShoppingItem(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addShoppingItems(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);  //the ... spread operator sends each item of ingredients to be pushed as a list
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteShoppingItem(index:number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}