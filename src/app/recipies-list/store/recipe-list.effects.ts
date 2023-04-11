import { Injectable } from "@angular/core";
import { RecipiesService } from "src/app/services/recipies.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { apiGetRecipeSuccessful, apiGetRecipesSuccessful, recipeListOppened, recipeListSelectRecipe } from "./recipe-list.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class RecipeListEffects {
    recipesLoading$ = createEffect(()=>this.actions.pipe(
        ofType(recipeListOppened),
        exhaustMap((action)=>{
            return this.recipeService.fetchData(action.filter).pipe(
                map((data)=> apiGetRecipesSuccessful({recipes: data})))
        })
        )
    );
    loadRecipeById$ = createEffect(()=>this.actions.pipe(
        ofType(recipeListSelectRecipe),
        exhaustMap((action)=>{
            return this.recipeService.getRecipeByID(action.id).pipe(
                map((data)=>apiGetRecipeSuccessful({ recipe: data }))
            )
        })
    ))

    constructor(private recipeService: RecipiesService, private actions: Actions) {}
}