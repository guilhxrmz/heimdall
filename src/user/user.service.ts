import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async addUser(email: string, username: string, password: string) {
    const newUser = new this.user({
      email,
      username,
      password,
    });
    const result = await newUser.save();
    return result.username as string;
  }

  async getUser(username: string) {
    const user = await this.findUser(username);
    return {
      email: user.email,
      username: user.username,
    };
  }
  async getAllUser() {
    const users = await this.user.find();
    return users;
  }

  async validate(
    username: string,
    password: string,
  ): Promise<{ message: string }> {
    const findUser = this.user.findOne({
      username: username,
    });

    try {
      if ((await findUser).password == password) {
        return { message: 'Verified' };
      } else {
        return { message: 'Incorrect Password' };
      }
    } catch (error) {
      return { message: 'User not found' };
    }
  }

  private async findUser(username: string): Promise<User> {
    let user;
    try {
      user = await this.user.findOne({
        username: username,
      });
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}
