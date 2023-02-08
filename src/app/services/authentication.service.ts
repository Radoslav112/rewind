import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class AuthenticationService {
    loggedUser$ = new BehaviorSubject<User | null>(null);
    error$ = new Subject<string>;
    users = UserRepository.getInstance();

    constructor() { }

    login(username: string, password: string) {
        let res = this.users.contains(username, password)
        res ? this.loggedUser$.next(res) : this.error$.next("User with this username and password does not exist.");
    
        setTimeout(() => this.logout(), 60000); // user will logout automatically after 60 sec
    }

    logout() {
        this.loggedUser$.next(null);
    }

    public isLoggedIn(): boolean {
        return !!this.loggedUser$.getValue();
    }
}