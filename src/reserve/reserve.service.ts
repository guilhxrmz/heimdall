import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {format} from 'date-fns';
import { Model } from 'mongoose';
import { Reserve } from './entities/reserve.entity';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { RoomService } from '../room/room.service';
import { UsersService } from '../users/users.service';
import { UpdateRoomDto } from '../room/dto/update-room.dto';

@Injectable()
export class ReserveService {
  constructor(
    @InjectModel(Reserve.name) private reserveModel: Model<Reserve>,
    private roomService: RoomService,
    private usersService: UsersService,
  ) {}

  async create(createReserveDto: CreateReserveDto): Promise<Reserve> {
    const room = await this.roomService.findOne(createReserveDto.room_id);
    const roomObj = room.toObject();
    const updateRoomDto: UpdateRoomDto = {
      ...roomObj,
      status: 'OCUPADA',
    } as unknown as UpdateRoomDto;

    this.roomService.update(roomObj._id as string, updateRoomDto)


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

      const reserves = await this.reserveModel.find(query);

      if (!reserves || reserves.length === 0) {
        return [];
      }

      
      const roomPromises = reserves.map(reserve => this.roomService.findOne(reserve.room_id));
    const rooms = await Promise.all(roomPromises);

    // Busca as informações dos teachers (ou users) correspondentes
    const teacherPromises = reserves.map(reserve => this.usersService.findOne(reserve.user_id));
    const teachers = await Promise.all(teacherPromises);

    // Adiciona os objetos rooms e teachers às respectivas reservas
    const reservesWithDetails = reserves.map((reserve, index) => ({
      ...reserve.toObject(),
      room: rooms[index],
      teacher: teachers[index]
    }));

    // Retorna as reservas com os objetos rooms e teachers aninhados
    return reservesWithDetails;
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
    // Obter a reserva pelo id para acessar o room_id
    const reserve = await this.reserveModel.findById(id).exec();
    if (!reserve) {
      throw new NotFoundException('Reservation not found');
    }

    const result = await this.reserveModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Reservation not found');
    }

    // Atualizar o status do room para "DISPONIVEL"
    const room = await this.roomService.findOne(reserve.room_id);
    if (room) {
      const roomObj = room.toObject();
      const updateRoomDto: UpdateRoomDto = {
        ...roomObj,
        status: 'DISPONIVEL',
      } as unknown as UpdateRoomDto;

      await this.roomService.update(roomObj._id as string, updateRoomDto);
    }
  }

  // Function to format date in desired format
    formatDate(date: string): string {
      return format(date, 'ddd MMM dd yyyy HH:mm:ss XXX');
  }
}
