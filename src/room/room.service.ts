import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const createdRoom = new this.roomModel(createRoomDto);
    return createdRoom.save();
  }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }

  async findByInst(idInst: string) {
    try {
      const query = { instituition_id: idInst };

      const users = await this.roomModel.find(query);

      if (!users || users.length === 0) {
        return [];
      }

      return users;
    } catch (error) {
      console.error('Error finding rooms:', error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Room> {
    const room = await this.roomModel.findById(id).exec();
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return room;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    const updatedRoom = await this.roomModel
      .findByIdAndUpdate(id, updateRoomDto, { new: true })
      .exec();

    if (!updatedRoom) {
      throw new NotFoundException('Room not found');
    }

    return updatedRoom;
  }

  async remove(id: string): Promise<void> {
    const result = await this.roomModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException('Room not found');
    }
  }
}
