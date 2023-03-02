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
}