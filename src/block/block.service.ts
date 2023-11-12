import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Block } from './entities/block.entity';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Injectable()
export class BlockService {
  constructor(@InjectModel(Block.name) private blockModel: Model<Block>) {}

  async create(createBlockDto: CreateBlockDto): Promise<Block> {
    const createdBlock = new this.blockModel(createBlockDto);
    return createdBlock.save();
  }

  async findAll(): Promise<Block[]> {
    return this.blockModel.find().exec();
  }

  async findOne(id: string): Promise<Block> {
    const block = await this.blockModel.findById(id).exec();
    if (!block) {
      throw new NotFoundException('Block not found');
    }
    return block;
  }

  async update(id: string, updateBlockDto: UpdateBlockDto): Promise<Block> {
    const updatedBlock = await this.blockModel
      .findByIdAndUpdate(id, updateBlockDto, { new: true })
      .exec();

    if (!updatedBlock) {
      throw new NotFoundException('Block not found');
    }

    return updatedBlock;
  }

  async remove(id: string): Promise<void> {
    const result = await this.blockModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException('Block not found');
    }
  }
}
