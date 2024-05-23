import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {format} from 'date-fns';
import { Model } from 'mongoose';
import { Reserve } from './entities/reserve.entity';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Injectable()
export class ReserveService {
  constructor(
    @InjectModel(Reserve.name) private reserveModel: Model<Reserve>,
  ) {}

  async create(createReserveDto: CreateReserveDto): Promise<Reserve> {
    const createdReserve = new this.reserveModel(createReserveDto);
    createdReserve.start_time = createdReserve.start_time;
    createdReserve.end_time = createdReserve.end_time;
    return createdReserve.save();
  }

  async findAll(): Promise<Reserve[]> {
    return this.reserveModel.find().exec();
  }

  async findOne(id: string): Promise<Reserve> {
    const reserve = await this.reserveModel.findById(id).exec();
    if (!reserve) {
      throw new NotFoundException('Reservation not found');
    }
    return reserve;
  }

  async findByClass(class_id: string) {
    try {
      const query = { class_id };

      const users = await this.reserveModel.find(query);

      if (!users || users.length === 0) {
        return [];
      }

      return users;
    } catch (error) {
      console.error('Error finding reserves:', error);
      throw error;
    }
  }

  async update(
    id: string,
    updateReserveDto: UpdateReserveDto,
  ): Promise<Reserve> {
    const updatedReserve = await this.reserveModel
      .findByIdAndUpdate(id, updateReserveDto, { new: true })
      .exec();

    if (!updatedReserve) {
      throw new NotFoundException('Reservation not found');
    }

    return updatedReserve;
  }

  async remove(id: string): Promise<void> {
    const result = await this.reserveModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException('Reservation not found');
    }
  }

  // Function to format date in desired format
    formatDate(date: string): string {
      return format(date, 'ddd MMM dd yyyy HH:mm:ss XXX');
  }
}
