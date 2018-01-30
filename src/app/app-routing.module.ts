import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
	{path: '', component: ShoppingListComponent, pathMatch: 'full'},
	{path: 'shopping', component: ShoppingListComponent},
	{path: 'recipes', component: RecipesComponent, children: [
		{path: '', component: RecipeStartComponent},
		{path: ':id', component: RecipeDetailComponent},
		{path: 'new', component: RecipeEditComponent},
		{path: ':id/edit', component: RecipeEditComponent}
	]}, 
	{path: '**', redirectTo: '/shopping'}
];

@NgModule({
	imports: [
	RouterModule.forRoot(appRoutes)
	], 
	exports: [RouterModule]
})

export class AppRoutingModule {

}