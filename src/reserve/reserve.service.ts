import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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
}
