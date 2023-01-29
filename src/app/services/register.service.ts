import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class RegisterService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = UserRepository.getInstance();
    }

    public register(email: string, username: string, password: string, repeatPassword: string) {
        this.checkPasswords(password, repeatPassword);
        this.checkIsEmailTaken(email);
        this.userRepository.add(new User(email, username, password));
    }

    private checkPasswords(password: string, repeatPassword: string) {
        if (password !== repeatPassword) {
            throw new Error("Passwords does not match.");
        }
    }

    private checkIsEmailTaken(email: string) {
        if (this.userRepository.containsUserWithEmail(email)) {
            throw new Error("User with this email already exists.");
        }
    }
}