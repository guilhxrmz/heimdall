import { User } from "../../users/entities/user.entity";
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Class extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  teachers_id: string[];
  
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Course', required: false })
  course_id: string;

}
export const ClassSchema = SchemaFactory.createForClass(Class);
