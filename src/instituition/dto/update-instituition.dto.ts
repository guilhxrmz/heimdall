import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateInstituitionDto } from './create-instituition.dto';

export class UpdateInstituitionDto extends PartialType(CreateInstituitionDto) {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  address?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phone?: string;

  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;
}
