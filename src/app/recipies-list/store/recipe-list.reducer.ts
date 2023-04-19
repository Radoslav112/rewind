import { Recipe } from "src/app/models/recipe.model";
import * as RecipeListActions from "./recipe-list.actions"
import { createReducer, on } from "@ngrx/store";

export interface AsyncState<T> {
    data: T | null;
    loading: boolean;
    successful: boolean;
}

export interface State {
    recipes: AsyncState<Recipe[]>;
    selectedRecipe: AsyncState<Recipe>;
}

const initialState: State = {
    recipes: {
         data: null,
         loading: false,
         successful: false
    },
    selectedRecipe: {
        data: null,
        loading: false,
        successful: false
   }
}

export const recipeListReducer = createReducer(
    initialState,
    on(RecipeListActions.recipeListLoading, (state)=>{
        return {
            ...state,
            recipes:{
                data: null,
                loading: true,
                successful: false
            }
        }
    }),
    on(RecipeListActions.apiGetRecipesSuccessful, (state,{ recipes })=>{
        return {
            ...state,
            recipes:{
                data: recipes,
                loading: false,
                successful: true
            }
        }
    }),
    on(RecipeListActions.recipeListSelectRecipe, (state)=>{
        return {
            ...state,
            selectedRecipe: {
                data: null,
                loading: true,
                successful: false
            }
        }
    }),
    on(RecipeListActions.apiGetRecipeSuccessful, (state, { recipe })=>{
        return {
            ...state,
            selectedRecipe: {
                data: recipe,
                loading: false,
                successful: true
            }
        }
    })
)