import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from './recipes/recipe.model';

@Injectable()
export class ServersService {

  constructor(private http: Http) { }

  onSaveRecipes(recipes: Recipe[]) {
  	return this.http.put('https://recipe-book-4dfe0.firebaseio.com/recipes.json', recipes)
  }

  onGetRecipes() {
  	return this.http.get('https://recipe-book-4dfe0.firebaseio.com/recipes.json')
  }

}
