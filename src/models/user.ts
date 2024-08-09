import { randomUUID } from 'crypto';

interface IUserData {
    id?: string;
    name: string;
    email: string;
    password: string;
    refreshToken?: string;
    accessToken?: string;
}
export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    refreshToken?: string;
    accessToken?: string;

    constructor(data: IUserData) {
        this.id = data.id ?? randomUUID();
        this.email = data.email;
        this.name = data.name;
        this.password = data.password;
        this.accessToken = data.accessToken;
        this.refreshToken = data.refreshToken;
    }
}
