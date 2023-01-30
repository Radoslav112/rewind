import { Recipe } from "../models/recipe.model";

export class RecipeRepository {
    private recipies: Recipe[];
    private static repo: RecipeRepository;

    private constructor() {
        this.recipies = [new Recipe('admin@gmail.com', 'admin', 'password')]
    }
    
    public static getInstance(): RecipeRepository {
        if(!this.repo) {
            this.repo = new RecipeRepository();
        }

        return this.repo;
    }
}