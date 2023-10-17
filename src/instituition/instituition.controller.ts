import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituitionService } from './instituition.service';
import { CreateInstituitionDto } from './dto/create-instituition.dto';
import { UpdateInstituitionDto } from './dto/update-instituition.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('instituition')
@Controller('instituition')
export class InstituitionController {
  constructor(private readonly instituitionService: InstituitionService) {}

  @Post()
  create(@Body() createInstituitionDto: CreateInstituitionDto) {
    return this.instituitionService.create(createInstituitionDto);
  }

  @Get()
  findAll() {
    return this.instituitionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituitionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituitionDto: UpdateInstituitionDto) {
    return this.instituitionService.update(+id, updateInstituitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituitionService.remove(+id);
  }
}
