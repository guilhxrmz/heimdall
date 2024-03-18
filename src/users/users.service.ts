import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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

  async findTeachers() {
    const roleId = '65f5c07e489c8ea56ac6ff5b'; // Define o valor padrão para "Teachers"

    try {
      const teachers = await this.userModel.find({ role: roleId });

      if (!teachers) {
        return [];
      }

      return teachers;
    } catch (error) {
      console.error('Error finding teachers:', error);
      throw error;
    }
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndRemove(id).exec();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email }).exec();
    return user.encrypted_password == password;
  }
}
