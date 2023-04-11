import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipiesService } from '../services/recipies.service';
import { Store, select } from '@ngrx/store';
import { recipeListOppened } from './store/recipe-list.actions';
import { selectRecipes } from './store/recipe-list.selectors';
import { State } from './store/recipe-list.reducer';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipiesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] | null = null;
  recipesSubscription?: Subscription;
  recipeSelected: boolean = false;
  selectedRecipeSubscription?: Subscription;
  filter: string = '';

  constructor(
    private recipiesService: RecipiesService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<{ recipes: State }>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(selectRecipes)).subscribe({
      next: (recipes) => {
        this.recipes = recipes;
      }
    })

    this.store.dispatch(recipeListOppened({filter: ''}));

    // this.recipesSubscription = this.recipiesService.recipes$.subscribe({
    //   next: (recipes) => {
    //     this.recipes = recipes;
    //   }
    // })
    this.recipeSelected = false;
  }

  setContainerStyle() {
    return {
      'recipe-selected': this.recipeSelected === true,
      'recipe-not-selected': this.recipeSelected === false
    };
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipeSelected = true;
    this.router.navigate(['recipes', recipe.id])
  }

  ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
    this.selectedRecipeSubscription?.unsubscribe();
  }
}
