import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  number: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  chairs: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  tables: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  chairByTables: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  computers: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  projectors: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  blackBoards: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  capacity: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  block_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  course_id: string;

}
