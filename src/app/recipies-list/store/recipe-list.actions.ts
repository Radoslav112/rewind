import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const recipeListOppened = createAction(
    '[recipe-list]oppened',
    props<{ filter: string}>()
)
export const apiGetRecipeSuccessful = createAction(
    '[recipes API]loaded successfuly',
    props<{ recipes: Recipe[]}>()
)