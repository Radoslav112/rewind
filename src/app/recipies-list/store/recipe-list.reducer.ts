import { Recipe } from "src/app/models/recipe.model";
import * as RecipeListActions from "./recipe-list.actions"
import { createReducer, on } from "@ngrx/store";

export interface State {
    recipes: Recipe[] | null;
    recipesLoading: boolean;
    recipesOppened: boolean;
}

const initialState: State = {
    recipes: null,
    recipesLoading: false,
    recipesOppened: false
}

export const recipeListReducer = createReducer(
    initialState,
    on(RecipeListActions.recipeListOppened, (state)=>{
        // load recipes
        return {
            ...state,
            recipesLoading: true,
            recipesOppened: false
        }
    }),
    on(RecipeListActions.apiGetRecipeSuccessful, (state,{ recipes })=>{
        return {
            ...state,
            recipesLoading: false,
            recipesOppened: true,
            recipes: recipes
        }
    })
)