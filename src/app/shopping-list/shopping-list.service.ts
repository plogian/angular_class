import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	ingredientAdded = new EventEmitter<Ingredient>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Oranges', 10),
	];

	getIngredient() {
		return this.ingredients.slice(); 
	}

	addShoppingItem(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}