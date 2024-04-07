import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Instituition } from '../../instituition/entities/instituition.entity';

@Schema()
export class Course extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Instituition',
    required: true,
  })
  instituition: Instituition;

  @Prop({ required: true })
  name: string;

  @Prop()
  adm_id: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
