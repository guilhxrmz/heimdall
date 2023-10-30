import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Instituition } from './entities/instituition.entity';
import { CreateInstituitionDto } from './dto/create-instituition.dto';
import { UpdateInstituitionDto } from './dto/update-instituition.dto';

@Injectable()
export class InstituitionService {
  constructor(
    @InjectModel(Instituition.name)
    private readonly InstituitionModel: Model<Instituition>,
  ) {}

  async create(
    createInstituitionDto: CreateInstituitionDto,
  ): Promise<Instituition> {
    const createdInstituition = new this.InstituitionModel(createInstituitionDto);
    return createdInstituition.save();
  }

  async findAll(): Promise<Instituition[]> {
    return this.InstituitionModel.find().exec();
  }

  async findOne(id: string): Promise<Instituition | null> {
    return this.InstituitionModel.findById(id).exec();
  }

  async update(
    id: string,
    updateInstituitionDto: UpdateInstituitionDto,
  ): Promise<Instituition | null> {
    return this.InstituitionModel
      .findByIdAndUpdate(id, updateInstituitionDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Instituition | null> {
    return this.InstituitionModel.findByIdAndRemove(id).exec();
  }
}
