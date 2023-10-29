import { Module } from '@nestjs/common';
import { InstituitionService } from './instituition.service';
import { InstituitionController } from './instituition.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InstitutionSchema } from './entities/instituition.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Instituition', schema: InstitutionSchema },
    ]),
  ],
  controllers: [InstituitionController],
  providers: [InstituitionService],
})
export class InstituitionModule {}
