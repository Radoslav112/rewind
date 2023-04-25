import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { Store } from '@ngrx/store';
import { recipeListLoading } from './store/recipe-list.actions';
import { AppState, selectAllRecipes } from './store/recipe-list.selectors';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipes$ = this.store.select(selectAllRecipes)
  recipeSelected: boolean = false;
  filter: string = '';


  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(recipeListLoading({filter: ''}));
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
}
