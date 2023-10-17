import { User } from "../../users/entities/user.entity";
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Class {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  teachers: User[];
}
export const ClassSchema = SchemaFactory.createForClass(Class);
