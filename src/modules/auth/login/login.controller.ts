import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';

@Controller('auth/login')
export class LoginController {
    @Post()
    async login(@Body() loginData: LoginUserDTO) {}
}
