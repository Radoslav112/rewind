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
  recipies = this.recipiesService.recipes$.getValue();
  recipesSubscription?: Subscription;

  constructor(private recipiesService: RecipiesService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipesSubscription = this.recipiesService.recipes$.subscribe({
      next:(recipes)=>{
        this.recipies=recipes;
      }
    })
  }

  ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
  }

  isRecipeOpenned(): boolean {
    console.log(this.route);
    return false;
  }
}
