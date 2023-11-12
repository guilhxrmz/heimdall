import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassUser, ClassUserSchema } from './entities/class-user.entity';
import { CreateClassUserDto } from './dto/create-class-user.dto';
import { UpdateClassUserDto } from './dto/update-class-user.dto';

@Injectable()
export class ClassUserService {
  constructor(
    @InjectModel(ClassUser.name) private classUserModel: Model<ClassUser>,
  ) {}

  async create(createClassUserDto: CreateClassUserDto): Promise<ClassUser> {
    const createdClassUser = new this.classUserModel(createClassUserDto);
    return createdClassUser.save();
  }

  async findAll(): Promise<ClassUser[]> {
    return this.classUserModel.find().exec();
  }

  async findOne(id: string): Promise<ClassUser> {
    const classUser = await this.classUserModel.findById(id).exec();
    if (!classUser) {
      throw new NotFoundException('ClassUser not found');
    }
    return classUser;
  }

  async update(
    id: string,
    updateClassUserDto: UpdateClassUserDto,
  ): Promise<ClassUser> {
    const updatedClassUser = await this.classUserModel
      .findByIdAndUpdate(id, updateClassUserDto, { new: true })
      .exec();

    if (!updatedClassUser) {
      throw new NotFoundException('ClassUser not found');
    }

    return updatedClassUser;
  }

  async remove(id: string): Promise<void> {
    const result = await this.classUserModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException('ClassUser not found');
    }
  }
}
