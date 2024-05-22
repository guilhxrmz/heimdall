import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentQuery, Model } from 'mongoose';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseModel.findById(id).exec();
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  async findCourseByInst(id: string){
    try {
      const courses = await this.courseModel.find({ instituition: id});

      if (!courses || courses.length === 0) {
        return []
      }

      return courses;
    } catch (error) {
      // Handle potential errors gracefully (e.g., logging, throwing specific exceptions)
      console.error('Error fetching courses:', error);
      throw error; // Re-throw for potential global error handling
    }
  }z

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const updatedCourse = await this.courseModel
      .findByIdAndUpdate(id, updateCourseDto, { new: true })
      .exec();

    if (!updatedCourse) {
      throw new NotFoundException('Course not found');
    }

    return updatedCourse;
  }

  async remove(id: string): Promise<void> {
    const result = await this.courseModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException('Course not found');
    }
  }
}
