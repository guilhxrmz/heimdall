import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  registration_number: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  encrypted_password: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  role_id: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  class_id: string;
}
