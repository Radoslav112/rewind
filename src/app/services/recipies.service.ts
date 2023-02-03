import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeRepository } from "../repositories/recipie.repository";

@Injectable()
export class RecipiesService {
    private recipiesList = RecipeRepository.getInstance();

    constructor() {}

    public getRecipies():Recipe[] {
        return this.recipiesList.getRecipies();
    }
}