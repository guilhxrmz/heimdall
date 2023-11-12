import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClassUserService } from './class-user.service';
import { CreateClassUserDto } from './dto/create-class-user.dto';
import { UpdateClassUserDto } from './dto/update-class-user.dto';

@Controller('class-users')
export class ClassUserController {
  constructor(private readonly classUserService: ClassUserService) {}

  @Post()
  async create(@Body() createClassUserDto: CreateClassUserDto) {
    return this.classUserService.create(createClassUserDto);
  }

  @Get()
  async findAll() {
    return this.classUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.classUserService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassUserDto: UpdateClassUserDto,
  ) {
    return this.classUserService.update(id, updateClassUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.classUserService.remove(id);
    return { message: 'ClassUser deleted successfully' };
  }
}
