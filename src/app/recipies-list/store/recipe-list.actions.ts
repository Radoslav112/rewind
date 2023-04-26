import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const recipeListLoading = createAction(
    '[recipe-list]loading',
    props<{ filter: string}>()
)
export const apiGetRecipesSuccessful = createAction(
    '[recipes API]recipes loaded successfuly',
    props<{ recipes: Recipe[]}>()
)
export const recipeListSelectRecipe = createAction(
    '[recipe-list]select recipe',
    props<{id: Number}>()
)
export const apiGetRecipeSuccessful = createAction(
    '[recipe API]recipe selected successfuly',
    props<{ recipe: Recipe }>()
)
