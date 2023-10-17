import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: number) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: number) {
    return await this.userModel.findByIdAndRemove(id).exec();
  }
}
