import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";

export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private readonly userRepository: UserRepository){}

    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        throw new Error("Method not implemented.");
    }
}