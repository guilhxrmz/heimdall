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

  async findOne(id: number): Promise<Class> {
    return this.classModel.findById(id).exec();
  }

  async update(id: number, updateClassDto: UpdateClassDto): Promise<Class> {
    return this.classModel
      .findByIdAndUpdate(id, updateClassDto, { new: true })
      .exec();
  }

  async remove(id: number): Promise<Class> {
    return this.classModel.findByIdAndRemove(id).exec();
  }
}
