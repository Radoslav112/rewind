import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(value: Recipe[], filterString: string): any {
    if(value.length === 0) {
      return value;
    }
    const resultArray: Recipe[] = [];
    value.forEach((recipe)=>{
      const recipeName = recipe.name.toLowerCase();
      if(recipeName.includes(filterString.toLowerCase())) {
        resultArray.push(recipe);
      }
    })

    return resultArray;
  }

}
