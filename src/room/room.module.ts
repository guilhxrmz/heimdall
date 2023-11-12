import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './entities/room.entity';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
