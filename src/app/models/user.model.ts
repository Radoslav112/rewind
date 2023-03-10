
export class User {
    constructor(private _email: string, private _username: string, private _password: string) {

    }

    get email() {
        return this._email;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }
}