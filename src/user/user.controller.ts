import { Controller, Post, Body, Get } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { User } from '../entities/User';

@Controller('/users')
export class UserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() userData: User): Promise<void | User> {
        await this.userRepository.create(userData);

        return userData;
    }

    @Get()
    async findUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}
