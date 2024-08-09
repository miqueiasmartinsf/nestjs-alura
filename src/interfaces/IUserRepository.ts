export interface IUserRepository {
    findAll(): Promise<void>;

    findById(id: string): Promise<void>;

    findByEmail(email: string): Promise<void>;
}
