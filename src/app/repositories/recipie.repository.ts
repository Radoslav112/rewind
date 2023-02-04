import { Product } from "../models/product.model";
import { Recipe } from "../models/recipe.model";

export class RecipeRepository {
    private recipies: Recipe[];
    private static repo: RecipeRepository;

    private constructor() {
        this.recipies = [
            new Recipe(1, 'Chicken with rice', [new Product('1,5 kg', 'Chicken'), new Product('2', 'Onions'), new Product('0.4 kg', 'Rice')], 'Cut the chicken into portions (wings, legs and white meat), and leave the backbone whole. Wash very well and put it in a pot. Pour cold water and add salt (per 1 liter of water, 1 teaspoon of salt), after it boils, remove the formed foam. Finely chop 1 onion and add it to the boiling chicken, together with the peppercorns and the whole pepper and carrot, cook until the meat is half cooked.'),
            new Recipe(2, 'Baked pasta with milk and cheese', [new Product('50 gr','Pasta'),new Product('75 gr','Milk'),new Product('1','Egg'),new Product('30 gr','Sugar')],'We put the water to boil. We put a little salt. Put the macaroni in the boiling water and cook until soft. Fry the fat in a pan, placing the drained macaroni in it. They get mixed up. They are poured with a prepared mixture of beaten eggs, milk and sugar. Bake in the oven until golden brown.')
        ]
    }

    public static getInstance(): RecipeRepository {
        if (!this.repo) {
            this.repo = new RecipeRepository();
        }

        return this.repo;
    }

    public getRecipies(): Recipe[] {
        return this.recipies;
    }

    public getRecipeById(id: string): Recipe {
        const res = this.recipies.find(el => {
            return (el.id.toString())===id;
        });
        if(res) {
            return res;
        } 
        return new Recipe(0,'',[],'');
    }
}