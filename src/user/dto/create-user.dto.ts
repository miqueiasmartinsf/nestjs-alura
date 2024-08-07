import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @MinLength(5)
    password: string;
}
