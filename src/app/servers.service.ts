import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Recipe } from './recipes/recipe.model';
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class ServersService {

  constructor(private http: Http, 
      private recipeService: RecipeService,
      private authService: AuthService) { }

  onSaveRecipes() {
  	const token = this.authService.getToken();
    return this.http.put('https://recipe-book-3d02e.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  onGetRecipes() {
    const token = this.authService.getToken();

  	this.http.get('https://recipe-book-3d02e.firebaseio.com/recipes.json?auth=' + token)
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
