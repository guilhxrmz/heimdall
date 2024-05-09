import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {

  @IsString()
  @ApiProperty()
  number: number;


  @IsString()
  @ApiProperty()
  chairs: number;


  @IsString()
  @ApiProperty()
  tables: number;


  @IsString()
  @ApiProperty()
  chairByTables: number;


  @IsString()
  @ApiProperty()
  computers: number;


  @IsString()
  @ApiProperty()
  projectors: number;


  @IsString()
  @ApiProperty()
  blackBoards: number;


  @IsNumber()
  @IsPositive()
  @ApiProperty()
  capacity: number;


  @IsString()
  @ApiProperty()
  status: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  block_id: string;


  @IsString()
  @ApiProperty()
  @IsOptional()
  course_id: string;

}
