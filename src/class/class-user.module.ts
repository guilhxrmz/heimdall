import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassUser, ClassUserSchema } from './entities/class-user.entity';
import { ClassUserController } from './class-user.controller';
import { ClassUserService } from './class-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ClassUser', schema: ClassUserSchema }]),
  ],
  controllers: [ClassUserController],
  providers: [ClassUserService],
})
export class ClassUserModule {}
