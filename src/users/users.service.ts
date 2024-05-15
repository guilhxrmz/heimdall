import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RegistrationRequest } from './entities/registration-request.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Registration') private registrationModel: Model<RegistrationRequest>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async createRegistrationRequest(createUserDto: CreateUserDto) {
    const createdUser = new this.registrationModel(createUserDto);
    return await createdUser.save();
  }

  async findAllRegistrationRequest() {
    return await this.registrationModel.find();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findByRoleAndInst(idRole: string, idInst: string) {
    try {
      const query = { role: idRole };

      // Check if idInst is provided
      if (idInst) {
        query['instituition'] = idInst; // Use bracket notation for dynamic property access
      }

      const users = await this.userModel.find(query);

      if (!users || users.length === 0) {
        return []; // Return empty array if no users found
      }

      return users;
    } catch (error) {
      console.error('Error finding users:', error);
      throw error; // Re-throw for potential global error handling
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
