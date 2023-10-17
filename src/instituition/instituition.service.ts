import { Injectable } from '@nestjs/common';
import { CreateInstituitionDto } from './dto/create-instituition.dto';
import { UpdateInstituitionDto } from './dto/update-instituition.dto';

@Injectable()
export class InstituitionService {
  create(createInstituitionDto: CreateInstituitionDto) {
    return 'This action adds a new instituition';
  }

  findAll() {
    return `This action returns all instituition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instituition`;
  }

  update(id: number, updateInstituitionDto: UpdateInstituitionDto) {
    return `This action updates a #${id} instituition`;
  }

  remove(id: number) {
    return `This action removes a #${id} instituition`;
  }
}
