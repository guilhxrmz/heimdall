import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './entities/course.entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
