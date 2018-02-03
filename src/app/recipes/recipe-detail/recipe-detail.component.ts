import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService, 
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe (
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
          }
        )
  }

  addToShoppingList() {
  	// can do the below, but it emits an event for every ingredient. There's a better way
  	// for(var i = 0; i<this.recipe.ingredients.length; i++ ) {
  	// 	this.shoppingListService.addShoppingItem(this.recipe.ingredients[i]);
  	// }
  	this.shoppingListService.addShoppingItems(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
