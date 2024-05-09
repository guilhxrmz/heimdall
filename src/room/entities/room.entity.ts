import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Block } from '../../block/entities/block.entity';
import { Course } from '../../course/entities/course.entity';

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  number: number;

  @Prop({  type: Number })
  chairs: number;

  @Prop({  type: Number })
  tables: number;

  @Prop({  type: Number })
  chairByTables: number;

  @Prop({  type: Number })
  computers: number;

  @Prop({  type: Number })
  projectors: number;

  @Prop({  type: Number })
  blackBoards: number;

  @Prop({  type: Number })
  capacity: number;

  @Prop()
  status: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Block', required: false })
  block_id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Course', required: false })
  course_id: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
