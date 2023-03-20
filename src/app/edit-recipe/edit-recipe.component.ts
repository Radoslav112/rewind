import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { Recipe } from '../models/recipe.model';
import { RecipiesService } from '../services/recipies.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  editForm: FormGroup = new FormGroup({});
  recipe: Recipe = new Recipe(0, '', [], '');
  recipeSubscription?: Subscription;
  ingredients: Product[] = this.recipe.ingredients;

  constructor(private route: ActivatedRoute, private recipeService: RecipiesService, private router: Router) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipeByID(this.route.snapshot.params['id']);
    this.route.params.subscribe((params:Params) => {
      this.recipe = this.recipeService.getRecipeByID(params['id']);
      this.ingredients = this.recipe.ingredients;
    })

    this.editForm = new FormGroup({
      'recipeName': new FormControl(this.recipe.name),
      'recipeIngredients': new FormArray<FormGroup>([]),
      'description': new FormControl(this.recipe.directions)
    });

    this.recipe.ingredients.forEach((product)=>{
      this.getRecipeIngredients().push(new FormGroup({
        'ingredientName': new FormControl(product.name),
        'ingredientQuantity': new FormControl(product.quantity)
      })) 
    })
  }

  onAddIngredient() {
    this.getRecipeIngredients().push(new FormGroup({
      'ingredientName': new FormControl(''),
      'ingredientQuantity': new FormControl('')
    })) 
  }

  onDeleteIngredient(ingredientControl: FormGroup<any>) {
    const index = this.getRecipeIngredients().value.findIndex(group => {
      return group === ingredientControl.value
    })
    this.getRecipeIngredients().removeAt(index)
  }

  getRecipeIngredients(): FormArray<FormGroup> {
    return (<FormArray<FormGroup>>this.editForm.get('recipeIngredients'));
  }

  onSubmit() {
    var arr: Product[] = [];
    this.editForm.value.recipeIngredients.forEach((element: any) => {
      arr.push(new Product(element.ingredientQuantity,element.ingredientName));
    });
    const r = new Recipe(this.recipe.id, this.editForm.value.recipeName, arr, this.editForm.value.description);
  
    this.recipeService.updateRecipe(r);
    this.router.navigate(['recipes',this.recipe.id]);
  }
}