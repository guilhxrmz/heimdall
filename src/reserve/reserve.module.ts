import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reserve, ReserveSchema } from './entities/reserve.entity';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reserve', schema: ReserveSchema }]),
  ],
  controllers: [ReserveController],
  providers: [ReserveService],
})
export class ReserveModule {}
