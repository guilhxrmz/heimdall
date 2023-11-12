import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Room } from '../../room/entities/room.entity';
import { User } from '../../users/entities/user.entity';
import { Class } from '../../class/entities/class.entity';

@Schema()
export class Reserve extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Room', required: true })
  room_id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user_id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Class', required: true })
  class_id: string;

  @Prop({
    required: true,
    enum: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  })
  day_of_week: string;

  @Prop({ required: true })
  start_time: Date;

  @Prop({ required: true })
  end_time: Date;
}

export const ReserveSchema = SchemaFactory.createForClass(Reserve);
