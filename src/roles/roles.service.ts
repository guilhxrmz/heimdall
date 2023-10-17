import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createRoleDto);
    return createdRole.save();
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }

  async findOne(id: number): Promise<Role> {
    return this.roleModel.findById(id).exec();
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    return this.roleModel
      .findByIdAndUpdate(id, updateRoleDto, { new: true })
      .exec();
  }

  async remove(id: number): Promise<Role> {
    return this.roleModel.findByIdAndRemove(id).exec();
  }
}
