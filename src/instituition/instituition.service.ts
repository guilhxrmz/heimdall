import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Institution } from './entities/instituition.entity';
import { CreateInstituitionDto } from './dto/create-instituition.dto';
import { UpdateInstituitionDto } from './dto/update-instituition.dto';

@Injectable()
export class InstituitionService {
  constructor(
    @InjectModel(Institution.name)
    private readonly institutionModel: Model<Institution>,
  ) {}

  async create(
    createInstitutionDto: CreateInstituitionDto,
  ): Promise<Institution> {
    const createdInstitution = new this.institutionModel(createInstitutionDto);
    return createdInstitution.save();
  }

  async findAll(): Promise<Institution[]> {
    return this.institutionModel.find().exec();
  }

  async findOne(id: string): Promise<Institution | null> {
    return this.institutionModel.findById(id).exec();
  }

  async update(
    id: string,
    updateInstitutionDto: UpdateInstituitionDto,
  ): Promise<Institution | null> {
    return this.institutionModel
      .findByIdAndUpdate(id, updateInstitutionDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Institution | null> {
    return this.institutionModel.findByIdAndRemove(id).exec();
  }
}
