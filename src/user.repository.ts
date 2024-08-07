import { User } from './models/User';

export class UserRepository {
    users: User[] = [];

    async create(data: User): Promise<void> {
        this.users.push(data);

        console.log(this.users);
    }
}
