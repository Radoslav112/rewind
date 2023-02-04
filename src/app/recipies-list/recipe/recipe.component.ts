import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeRepository } from 'src/app/repositories/recipie.repository';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe = new Recipe(0, '', [], '');
  private recipeRepository = RecipeRepository.getInstance();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = this.recipeRepository.getRecipeById(this.route.snapshot.params['id']);
    this.route.params.subscribe((params:Params) => {
      this.recipe = this.recipeRepository.getRecipeById(params['id']);
    })
  }

}
