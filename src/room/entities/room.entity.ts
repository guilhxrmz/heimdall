import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Block } from '../../block/entities/block.entity';

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Number })
  capacity: number;

  @Prop({ required: true })
  status: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Block', required: true })
  block_id: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
