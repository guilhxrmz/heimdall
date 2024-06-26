import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../../roles/entities/role.entity';
import { Instituition } from '../../instituition/entities/instituition.entity';
import { Class } from '../../class/entities/class.entity';

@Schema()
export class RegistrationRequest extends Document {
  @Prop({ required: false })
  valid: string;
  
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  encrypted_password: string;

  @Prop({ required: true })
  registration_number: string;
  
  @Prop({ required: false })
  status: 'CONFIRMED'| 'REJECTED' | 'IDLE' = 'IDLE';

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Role' })
  role: Role;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Instituition' })
  instituition: Instituition;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Class' }] })
  class: Class[];
}

export const RegistrationSchema = SchemaFactory.createForClass(RegistrationRequest);
