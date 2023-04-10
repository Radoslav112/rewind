import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipiesService } from 'src/app/services/recipies.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipe: Recipe = new Recipe(0, '', [], '');
  selectedRecipeSubscription?: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipiesService,
    private http: HttpClient) { }

  ngOnInit(): void {
    const rec = this.recipeService.getRecipeByID(this.route.snapshot.params['id']);
    this.recipeService.updateRecipe(rec);

    this.route.params.subscribe((params:Params) => {
      this.recipe = this.recipeService.getRecipeByID(params['id']);
    })

    this.selectedRecipeSubscription = this.recipeService.selectedRecipe$.subscribe({
      next: (recipe) => {
        if(recipe) this.recipe = recipe;
      }
    })
  }

  onPostClicked() {
    this.http.post(
      'https://recipeapi-a1e7f-default-rtdb.firebaseio.com/recipe.json',
      this.recipe
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  ngOnDestroy(): void {
    this.recipeService.updateSelectedRecipe(null);
    this.selectedRecipeSubscription?.unsubscribe();
  }
}