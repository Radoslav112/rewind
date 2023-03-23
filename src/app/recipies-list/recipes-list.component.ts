import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipiesService } from '../services/recipies.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipiesListComponent implements OnInit, OnDestroy {
  recipies = this.recipiesService.getRecipes();
  recipesSubscription?: Subscription;
  recipeSelected: boolean = false;
  selectedRecipeSubscription?: Subscription;
  filter:string = '';

  constructor(private recipiesService: RecipiesService, public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recipesSubscription = this.recipiesService.recipes$.subscribe({
      next: (recipes) => {
        this.recipies = recipes;
      }
    })
  }

  setContainerStyle() {
    console.log(this.activatedRoute.url)
    return {
      'recipe-selected': this.recipeSelected === true,
      'recipe-not-selected': this.recipeSelected === false
    };
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipeSelected = true;
    this.router.navigate(['recipes',recipe.id])
  }

  ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
    this.selectedRecipeSubscription?.unsubscribe();
  }
}
