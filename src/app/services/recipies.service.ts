import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Recipe } from "../models/recipe.model";
import { RecipeRepository } from "../repositories/recipie.repository";

@Injectable()
export class RecipiesService {
    private _recipes$ = new BehaviorSubject<Recipe[]>(RecipeRepository.getInstance().getRecipies());
    private _selectedRecipe$ = new Subject<Recipe|null>();

    constructor() {}

    public get recipes$() {
        return this._recipes$.asObservable();
    }

    public getRecipes() {
        return this._recipes$.getValue();
    }

    public get selectedRecipe$() {
        return this._selectedRecipe$.asObservable();
    }

    public getRecipeByID(id: string) {
        // const res = this.recipes$.getValue().find(recipe => {
        //     return recipe.id===+id
        // })       // return is needed because of curly braces

        const res = this._recipes$.getValue().find(recipe => recipe.id===+id) // here no return is needed
        return res? res : new Recipe(0,'',[],'');
    }

    public updateRecipe(recipe: Recipe) {
        let rec = this._recipes$.getValue();
        const index = rec.findIndex((r)=>r.id===recipe.id);
        if(index!==-1) {
            let recipesCopy:Recipe[] = [...(this._recipes$.getValue())]
            recipesCopy[index] = recipe;
            this._recipes$.next(recipesCopy);
        } 
        else {
            throw new Error(`Recipe with id ${recipe.id} does not exist`);
        }
    }

    public updateSelectedRecipe(recipe: Recipe|null) {
        this._selectedRecipe$.next(recipe);
    }
}