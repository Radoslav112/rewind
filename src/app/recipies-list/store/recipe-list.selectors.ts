import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./recipe-list.reducer";

export interface AppState {
    feature: State;
}

export const selectFeature = (state: AppState) => state.feature;
export const selectRecipes = createSelector(selectFeature, (state) => state.recipes)

export const selectFeatureCount = createSelector(selectFeature, (state) => {
    return state.recipesLoading;
});
