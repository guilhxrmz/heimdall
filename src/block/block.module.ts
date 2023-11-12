import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Block, BlockSchema } from './entities/block.entity';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Block', schema: BlockSchema }]),
  ],
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
