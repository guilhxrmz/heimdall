import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly usersService: UsersService) {}

 
  @Post()
  createRegistrationRequest(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createRegistrationRequest(createUserDto);
  }

  @Get() // Remova esta parte: ':id'
  findAllRegistrationRequest() {
    return this.usersService.findAllRegistrationRequest();
  }

}
