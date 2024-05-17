import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RegistrationUserDto } from './registration-user.dto';
import { RegistrationRequest } from '../entities/registration-request.entity';

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

  constructor(data: RegistrationRequest) {
    this.name = data.name;
    this.email = data.email;
    this.registration_number = data.registration_number;
    this.encrypted_password = data.encrypted_password;
    this.role_id = data.role._id;
    this.Instituition_id = data.instituition._id;
    this.class_id = data.class.map(x => x._id);
  }
}
