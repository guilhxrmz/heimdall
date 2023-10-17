import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Role extends Document {
  @Prop({ unique: true })
  role_name: string;

  @Prop()
  description: string;
}
export const RoleSchema = SchemaFactory.createForClass(Role);
