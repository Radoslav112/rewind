import { Product } from "./product.model";

export class Recipe {

    constructor(private _id: number, private _name: string, private _ingredients: Product[], private _directions: string) {

    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get ingredients() {
        return this._ingredients;
    }

    public get directions() {
        return this._directions;
    }
}