
export class User {
    constructor(private email: string, private username: string, private password: string) {

    }

    public getEmail() {
        return this.email;
    }
}