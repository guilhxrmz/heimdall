import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Block } from '../../block/entities/block.entity';
import { Course } from '../../course/entities/course.entity';

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  number: number;

  @Prop({ required: true, type: Number })
  chairs: number;

  @Prop({ required: true, type: Number })
  tables: number;

  @Prop({ required: true, type: Number })
  chairByTables: number;

  @Prop({ required: true, type: Number })
  computers: number;

  @Prop({ required: true, type: Number })
  projectors: number;

  @Prop({ required: true, type: Number })
  blackBoards: number;

  @Prop({ required: true, type: Number })
  capacity: number;

  @Prop({ required: true })
  status: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Block', required: false })
  block_id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Course', required: false })
  course_id: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
