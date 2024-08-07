import { Controller, Post, Body } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { User } from './models/User';

@Controller('/users')
export class UserController {
    userRepository = new UserRepository();

    @Post()
    async createUser(@Body() userData: User): Promise<void | User> {
        await this.userRepository.create(userData);

        return userData;
    }
}
