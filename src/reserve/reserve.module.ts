import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reserve, ReserveSchema } from './entities/reserve.entity';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { RoomModule } from '../room/room.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reserve', schema: ReserveSchema }]),
    RoomModule,
    UsersModule
  ],
  controllers: [ReserveController],
  providers: [ReserveService],
})
export class ReserveModule {}
