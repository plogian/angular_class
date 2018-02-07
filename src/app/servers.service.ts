import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Recipe } from './recipes/recipe.model';
import { RecipeService } from './recipes/recipe.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ServersService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  onSaveRecipes() {
  	return this.http.put('https://recipe-book-4dfe0.firebaseio.com/recipes.json', this.recipeService.getRecipes())
  }

  onGetRecipes() {
  	this.http.get('https://recipe-book-4dfe0.firebaseio.com/recipes.json')
      .map (
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
       )
  		.subscribe(
			(recipes:Recipe[]) => {
				this.recipeService.setRecipes(recipes);
			}
		);
  }

}
