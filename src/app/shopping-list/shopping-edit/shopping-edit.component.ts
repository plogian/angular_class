import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@Output() shoppingItemAdded = new EventEmitter<Ingredient>();

	constructor() { }

	ngOnInit() {

	}

	addShoppingItem(itemName:string, itemAmount:number) {
		const newIngredient = new Ingredient(itemName, itemAmount);
		this.shoppingItemAdded.emit(newIngredient);
	}

}
