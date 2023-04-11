import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./recipe-list.reducer";

export interface AppState {
    recipes: State;
}

export const selectFeature = (state: AppState) => state.recipes;
export const selectRecipes = createSelector(selectFeature, (state) => state.recipes.data)
export const selectSelectedRecipes = createSelector(selectFeature, (state) => state.selectedRecipe.data)

export const selectFeatureCount = createSelector(selectFeature, (state) => {
    return state.recipes.loading;
});
