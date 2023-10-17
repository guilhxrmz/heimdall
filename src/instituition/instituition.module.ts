import { Module } from '@nestjs/common';
import { InstituitionService } from './instituition.service';
import { InstituitionController } from './instituition.controller';

@Module({
  controllers: [InstituitionController],
  providers: [InstituitionService]
})
export class InstituitionModule {}
