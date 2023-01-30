
export class Product {
    
    constructor(private _id: number, private _name: string) {
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }
}