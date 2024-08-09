import { IUserRepository } from 'src/interfaces/IUserRepository';
import { UserSchema } from 'src/database/schemas';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly userSchema: UserSchema) {}

    findByEmail(email: string): Promise<void> {
        const user = UserSchema.findOne({ where: { email: email } });

        return;
    }
    async findAll(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async findById(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
