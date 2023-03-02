import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class RegisterService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = UserRepository.getInstance();
    }

    public register(email: string, username: string, password: string) {
        this.checkIsEmailTaken(email);
        this.userRepository.add(new User(email, username, password));
    }

    private checkIsEmailTaken(email: string) {
        if (this.userRepository.containsUserWithEmail(email)) {
            throw new Error("User with this email already exists.");
        }
    }
}