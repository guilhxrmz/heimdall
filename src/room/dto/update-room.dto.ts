import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  @IsOptional()
  capacity: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  status: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  block_id: string;
}
