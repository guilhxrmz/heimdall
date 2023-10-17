import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ClassModule } from './class/class.module';
import { CourseModule } from './course/course.module';
import { InstituitionModule } from './instituition/instituition.module';
import { ReserveModule } from './reserve/reserve.module';
import { RoomModule } from './room/room.module';
import { BlockModule } from './block/block.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://heimdall:asgard@heimdall.sunmezn.mongodb.net/?retryWrites=true&w=majority',
    ),
    RolesModule,
    UsersModule,
    ClassModule,
    CourseModule,
    InstituitionModule,
    ReserveModule,
    RoomModule,
    BlockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
