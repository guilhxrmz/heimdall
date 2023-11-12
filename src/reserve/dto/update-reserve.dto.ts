import { PartialType } from '@nestjs/mapped-types';
import { CreateReserveDto } from './create-reserve.dto';
import { IsIn, IsISO8601, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateReserveDto extends PartialType(CreateReserveDto) {
  @IsOptional()
  @IsString()
  readonly room_id?: string;

  @IsOptional()
  @IsString()
  readonly user_id?: string;

  @IsOptional()
  @IsString()
  readonly class_id?: string;

  @IsOptional()
  @IsIn([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ])
  readonly day_of_week?: string;

  @IsOptional()
  @IsISO8601()
  readonly start_time?: string;

  @IsOptional()
  @IsISO8601()
  readonly end_time?: string;
}
