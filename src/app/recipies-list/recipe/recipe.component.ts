import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipiesService } from 'src/app/services/recipies.service';
import * as RecipeActions from 'src/app/recipies-list/store/recipe-list.actions'
import { AppState, selectSelectedRecipes } from '../store/recipe-list.selectors';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipe$?: Observable<Recipe | null>;
  selectedRecipeSubscription?: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipiesService,
    private http: HttpClient,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.recipe$ = this.store.select(selectSelectedRecipes)
    this.route.params.subscribe((params:Params) => {
      this.store.dispatch(RecipeActions.recipeListSelectRecipe({ id: +params['id'] }))
    })
  }

  onPostClicked() {
    this.http.post(
      'https://recipeapi-a1e7f-default-rtdb.firebaseio.com/recipe.json',
      this.recipe$
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  ngOnDestroy(): void {
    this.recipeService.updateSelectedRecipe(null);
    this.selectedRecipeSubscription?.unsubscribe();
  }
}