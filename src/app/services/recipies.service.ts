import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { Product } from "../models/product.model";
import { Recipe } from "../models/recipe.model";
import { RecipeRepository } from "../repositories/recipie.repository";

@Injectable()
export class RecipiesService {
    private _recipes$ = new BehaviorSubject<Recipe[]>(RecipeRepository.getInstance().getRecipies());
    private _selectedRecipe$ = new Subject<Recipe | null>();
    private APIrecipes: Recipe[] = [];

    constructor(
        private http: HttpClient
    ) {
        this.fetchData("");
    }

    public get recipes$() {
        return this._recipes$.asObservable();
    }

    public getRecipes() {
        return this._recipes$.getValue();
    }

    public get selectedRecipe$() {
        return this._selectedRecipe$.asObservable();
    }

    public updateRecipe(recipe: Recipe) {
        let rec = this._recipes$.getValue();
        const index = rec.findIndex((r) => r.id === recipe.id);
        if (index !== -1) {
            let recipesCopy: Recipe[] = [...(this._recipes$.getValue())]
            recipesCopy[index] = recipe;
            this._recipes$.next(recipesCopy);
        }
        else {
            throw new Error(`Recipe with id ${recipe.id} does not exist`);
        }
    }

    public updateSelectedRecipe(recipe: Recipe | null) {
        this._selectedRecipe$.next(recipe);
    }

    public fetchData(filter: string): Observable<Recipe[]> {
        return this.http
            .get<{ [key: string]: any; }>('https://recipeapi-a1e7f-default-rtdb.firebaseio.com/recipe.json?name='+filter)
            .pipe(
                map(responseData => {
                    const recipeArray: Recipe[] = [];

                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            const ingredients = [];
                        for(const ingredientKey in (responseData[key]._ingredients)) {
                            ingredients.push(new Product((responseData[key]._ingredients[ingredientKey])._quantity,responseData[key]._ingredients[ingredientKey]._name))
                        }
                            const rec = new Recipe(responseData[key]._id, responseData[key]._name, ingredients, responseData[key]._directions)
                            recipeArray.push(rec);
                        }
                    }

                    return recipeArray;
                }))
    }

    public getRecipeByID(id:Number) : Observable<Recipe> {
                                //https://recipeapi-a1e7f-default-rtdb.firebaseio.com/recipe/-NRbVf7KvpLTvsKUOW78/_id
        return this.http.get<any>(`https://recipeapi-a1e7f-default-rtdb.firebaseio.com/recipe.json?orderBy="_id"&equalTo=${id}`)
        .pipe(
            map(responseData => {
                let recipe: Recipe = new Recipe(0,"",[],"");

                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        const ingredients = [];
                        for(const ingredientKey in (responseData[key]._ingredients)) {
                            ingredients.push(new Product((responseData[key]._ingredients[ingredientKey])._quantity,responseData[key]._ingredients[ingredientKey]._name))
                        }
                        recipe = new Recipe(responseData[key]._id, responseData[key]._name, ingredients, responseData[key]._directions);
                    }
                }

                return recipe;
            })
        )
    }
}