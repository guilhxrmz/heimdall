import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../users/entities/user.entity';
import { Class } from './class.entity';

@Schema()
export class ClassUser extends Document {
  @Prop({ type: { type: MongooseSchema.Types.ObjectId, ref: 'User' } })
  user: User;

  @Prop({ type: { type: MongooseSchema.Types.ObjectId, ref: 'Class' } })
  class: Class;
}

export const ClassUserSchema = SchemaFactory.createForClass(ClassUser);
