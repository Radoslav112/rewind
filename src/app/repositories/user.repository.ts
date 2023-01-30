import { User } from "../models/user.model";

export class UserRepository {
    private users: User[];
    private static repo: UserRepository;

    private constructor() {
        this.users = [new User('admin@gmail.com', 'admin', 'password')]
    }
    
    public static getInstance(): UserRepository {
        if(!this.repo) {
            this.repo = new UserRepository();
        }

        return this.repo;
    }

    public add(user: User) {
        this.users.push(user);
    }

    public containsUserWithEmail(email: string): boolean {
        let flag = false;
        this.users.forEach(user => {
            if(user.getEmail()===email)flag = true;
        })

        return flag;
    }
}