import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Recipe } from "../models/recipe.model";
import { RecipeRepository } from "../repositories/recipie.repository";

@Injectable()
export class RecipiesService {
    recipes$ = new BehaviorSubject<Recipe[]>(RecipeRepository.getInstance().getRecipies());

    constructor() {}

    public getRecipeByID(id: string) {
        // const res = this.recipes$.getValue().find(recipe => {
        //     return recipe.id===+id
        // })       // return is needed because of curly braces

        const res = this.recipes$.getValue().find(recipe => recipe.id===+id) // here no return is needed
        return res? res : new Recipe(0,'',[],'');
    }

    updateRecipe(recipe: Recipe) {
        const index = this.recipes$.getValue().findIndex((r)=>r.id===recipe.id);
        if(index!==-1) {
            let recipesCopy:Recipe[] = {...(this.recipes$.getValue())}
            recipesCopy[index] = recipe;
            this.recipes$.next(recipesCopy);
        } 
        else {
            throw new Error(`Recipe with id ${recipe.id} does not exist`);
        }
    }
}