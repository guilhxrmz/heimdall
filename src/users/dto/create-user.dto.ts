import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RegistrationUserDto } from './registration-user.dto';
import { RegistrationRequest } from '../entities/registration-request.entity';
import { RegistrationUserValidDto } from './registration-user-valid.dto';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  registration_number: string;

  @IsString()
  @ApiProperty()
  encrypted_password: string;

  @IsString()
  @ApiProperty()
  role_id: string;

  @IsString()
  @ApiProperty()
  Instituition_id: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  class_id: string[];

}
