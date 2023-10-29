import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateInstituitionDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @ApiProperty()
  phone: string;

  @IsEmail()
  @ApiProperty()
  email: string;
}
