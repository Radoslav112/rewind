import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipiesService } from '../services/recipies.service';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  constructor(private recipeService: RecipiesService) {}

  transform(value: Recipe[], filterString: string): any {
    if(value.length === 0 || filterString === "") {
      return of(value);
    }
    return this.recipeService.fetchData(filterString);
    // return value.filter((recipe)=>recipe.name.toLocaleLowerCase().includes(filterString.toLowerCase()))
  }

}
