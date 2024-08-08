import { Injectable } from '@nestjs/common';
import { User } from '../models/User';

@Injectable()
export class UserRepository {
    users: User[] = [];

    async create(data: User): Promise<void> {
        this.users.push(data);

        console.log(this.users);
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }
}
