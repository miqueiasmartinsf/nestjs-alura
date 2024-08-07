import { User } from 'src/models/User';

export interface IUserRepository {
    create(): Promise<void>;

    findAll(): Promise<User[]>;
}
