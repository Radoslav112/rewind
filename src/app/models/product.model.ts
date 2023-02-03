
export class Product {
    
    constructor(private _quantity: string, private _name: string) {
    }

    public get quantity() {
        return this._quantity;
    }

    public get name() {
        return this._name;
    }
}