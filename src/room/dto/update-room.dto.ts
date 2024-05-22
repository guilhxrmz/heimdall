import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateRoomDto extends PartialType(CreateRoomDto) {

  @IsString()
  @ApiProperty()
  @IsOptional()
  number: number;


  @IsString()
  @ApiProperty()
  @IsOptional()
  chairs: number;


  @IsString()
  @ApiProperty()
  @IsOptional()
  tables: number;


  @IsString()
  @ApiProperty()
  @IsOptional()
  chairByTables: number;


  @IsString()
  @ApiProperty()
  @IsOptional()
  computers: number;


  @IsString()
  @ApiProperty()
  @IsOptional()
  projectors: number;


  @IsString()
  @ApiProperty()
  @IsOptional()
  blackBoards: number;

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
  course_id: string;

  @IsString()
  @ApiProperty()
  Instituition_id: string;
}
