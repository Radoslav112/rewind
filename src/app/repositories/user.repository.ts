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
        let res = false;
        this.users.forEach(user => {
            if (user.email === email) res = true;
        })

        return res;
    }

    public contains(username: string, password: string): User | null {
        let res: User | null = null;
        this.users.forEach(user => {
            if (user.username === username && user.password === password) res = user;
        })

        return res;
    }
}