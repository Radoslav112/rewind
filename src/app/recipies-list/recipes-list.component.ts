import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipiesService } from '../services/recipies.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies = this.recipiesService.getRecipies();

  constructor(private recipiesService: RecipiesService, private route: Router) { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe: Recipe) {
    this.route.navigate(['recipes/',recipe.id]);
  }

}
