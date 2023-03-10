import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipiesService } from 'src/app/services/recipies.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe = new Recipe(0, '', [], '');
  recipeSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private recipeService: RecipiesService) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipeByID(this.route.snapshot.params['id']);
    this.route.params.subscribe((params:Params) => {
      this.recipe = this.recipeService.getRecipeByID(params['id']);
    })

    // this.recipeSubscription = this.recipeService.selectedRecipe$.subscribe({
    //   next:(recipe)=>{
        
    //   }
    // })
  }
}
