import { Controller, Post, Body, Get } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { User } from '../entities/User';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('/users')
export class UserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() userData: CreateUserDTO): Promise<void | User> {
        await this.userRepository.create(userData);

        return userData;
    }

    @Get()
    async findUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}
