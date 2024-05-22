import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from './entities/class.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(@InjectModel("Class") private classModel: Model<Class>) {}
  async create(createClassDto: CreateClassDto) {
    const createdClass = new this.classModel(createClassDto);
    return await createdClass.save();
  }

  async findAll(): Promise<Class[]> {
    return this.classModel.find().exec();
  }

  async findByCourse(course_id: string) {
    try {
      const query = { course_id };

      const users = await this.classModel.find(query);

      if (!users || users.length === 0) {
        return [];
      }

      return users;
    } catch (error) {
      console.error('Error finding class:', error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Class> {
    return this.classModel.findById(id).exec();
  }

  async update(id: string, updateClassDto: UpdateClassDto): Promise<Class> {
    return this.classModel
      .findByIdAndUpdate(id, updateClassDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Class> {
    return this.classModel.findByIdAndRemove(id).exec();
  }
}
