import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipiesService } from 'src/app/services/recipies.service';
import * as RecipeActions from 'src/app/recipies-list/store/recipe-list.actions'
import { AppState, selectSelectedRecipe } from '../store/recipe-list.selectors';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  readonly selectedRecipe$ = this.store.select(selectSelectedRecipe);
  
  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipiesService,
    private http: HttpClient,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.store.dispatch(RecipeActions.recipeListSelectRecipe({ id: +params['id'] }))
    })
  }

  onPostClicked() {
    // this.http.post(
    //   'https://recipeapi-a1e7f-default-rtdb.firebaseio.com/recipe.json',
    //   this.recipe$
    // ).subscribe(responseData => {
    //   console.log(responseData);
    // })



    // this post method will be refactored and will have meaning
  }

  ngOnDestroy(): void {
    this.recipeService.updateSelectedRecipe(null);
  }
}