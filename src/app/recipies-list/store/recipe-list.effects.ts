import { Injectable } from "@angular/core";
import { RecipiesService } from "src/app/services/recipies.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { apiGetRecipeSuccessful, recipeListOppened } from "./recipe-list.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class RecipeListEffects {
    recipesLoading$ = createEffect(()=>this.actions.pipe(
        ofType(recipeListOppened),
        exhaustMap((action)=>{
            return this.recipeService.fetchData(action.filter).pipe(
                map((data)=> apiGetRecipeSuccessful({recipes: data})))
        })
        )
    );
        

    constructor(private recipeService: RecipiesService, private actions: Actions) {}
}