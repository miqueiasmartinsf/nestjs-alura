import { User } from 'src/models/user';

export interface IUserRepository {
    findAll(): Promise<User | void>;

    findById(id: string): Promise<User | void>;

    findByEmail(email: string): Promise<User | void>;
}
