import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AsyncState, State } from "./recipe-list.reducer";
import { Recipe } from "src/app/models/recipe.model";


/*
export interface AsyncState<T> {
    data: T | null;
    loading: boolean;
    successful: boolean;
}

export interface State {
    recipes: AsyncState<Recipe[]>;
    selectedRecipe: AsyncState<Recipe>;
}
*/

export interface AppState {
    state: State;
}

const selectAllRecipesFeature = (appState: AppState) => appState.state.recipes;
const selectRecipeFeature = (state: AppState) => state.state.selectedRecipe;

export const selectAllRecipes = createSelector(
    selectAllRecipesFeature, 
    (allRecipes: AsyncState<Recipe[]>) => allRecipes)

export const selectSelectedRecipe = createSelector(
    selectRecipeFeature, 
    (selectedRecipe: AsyncState<Recipe>) => selectedRecipe)

// export const selectFeatureCount = createSelector(selectFeature, (state) => {
//     return state.recipes.loading;
// });
