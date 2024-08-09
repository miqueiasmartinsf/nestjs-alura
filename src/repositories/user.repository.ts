import { IUserRepository } from 'src/interfaces/IUserRepository';

export class UserRepository implements IUserRepository {

    constructor(private readonly dbConnection:  )

    findByEmail(email: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async findAll(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async findById(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
