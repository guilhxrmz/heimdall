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
import { UsersService } from './users.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { RegistrationUserDto } from './dto/registration-user.dto';
import { RegistrationRequest } from './entities/registration-request.entity';
import { RegistrationUserValidDto } from './dto/registration-user-valid.dto';
@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly usersService: UsersService) {}

 
  @Post()
  createRegistrationRequest(@Body() registrationUserDto: RegistrationUserDto) {
    return this.usersService.createRegistrationRequest(registrationUserDto);
  }

  @Post('/validate')
  validateRegistrationRequest(@Body() registrationRequest: RegistrationUserValidDto[]) {
    return this.usersService.validateRegistrationRequest(registrationRequest);
  }

  @Get(':id')
  findAllRegistrationRequest(@Param('id') id:string) {
    return this.usersService.findAllRegistrationRequest(id);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.removeRegistration(id);
  }

}
