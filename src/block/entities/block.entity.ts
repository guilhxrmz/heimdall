import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Block extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const BlockSchema = SchemaFactory.createForClass(Block);
