import { IsNotEmpty, IsNumber, IsPositive, IsString } from "@nestjs/class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

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
  block_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  course_id: string;
}
