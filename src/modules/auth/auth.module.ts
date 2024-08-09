import { Module } from '@nestjs/common';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@Module({
    imports: [LoginModule, RegisterModule],
    controllers: [],
    providers: [],
})
export class AuthModule {}
