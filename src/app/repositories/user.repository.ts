import { User } from "../models/user.model";

export class UserRepository {
    private users: User[];
    private static repo: UserRepository;

    private constructor() {
        this.users = [new User('admin@gmail.com', 'Admin', 'password')]
    }

    public static getInstance(): UserRepository {
        if (!this.repo) {
            this.repo = new UserRepository();
        }

        return this.repo;
    }

    public add(user: User) {
        this.users.push(user);
    }

    public containsUserWithEmail(email: string): boolean {
        const res = this.users.find(el => {
            el.email === email;
        })

        return res ? true : false;
    }

    public contains(username: string, password: string): User | null {
        const res = this.users.find(el => {
            return el.username === username && el.password === password;
        })

        return res ? res : null;
    }
}