import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const recipeListOppened = createAction(
    '[recipe-list]oppened',
    props<{ filter: string}>()
)
export const apiGetRecipesSuccessful = createAction(
    '[recipes API]loaded successfuly',
    props<{ recipes: Recipe[]}>()
)
export const recipeListSelectRecipe = createAction(
    '[recipe-list]select recipe',
    props<{id: Number}>()
)
export const apiGetRecipeSuccessful = createAction(
    '[recipe API]select recipe',
    props<{ recipe: Recipe }>()
)
