import { Injectable } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';
import { IUserRepository } from 'src/interfaces/IUserRepository';

@Injectable()
export class LoginService {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(loginData: LoginUserDTO) {
        const userExists = this.userRepository.findById();
    }
}
