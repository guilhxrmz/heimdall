import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockDto } from './create-block.dto';
import { IsOptional, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  description?: string;
}
