import { IsIn, IsISO8601, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReserveDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  room_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  class_id: string;

  @IsNotEmpty()
  @IsIn([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ])
  @ApiProperty()
  day_of_week: string;

  @IsNotEmpty()
  @IsISO8601()
  start_time: string;

  @IsNotEmpty()
  @IsISO8601()
  end_time: string;
}
