import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { RegistrationSchema } from './entities/registration-request.entity';
import { RegistrationController } from './registration.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema },{ name: 'Registration', schema: RegistrationSchema }])],
  controllers: [UsersController, RegistrationController],
  providers: [UsersService],
  exports: [UsersService, MongooseModule]
})
export class UsersModule {}
