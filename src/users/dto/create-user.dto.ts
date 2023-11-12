import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
}
