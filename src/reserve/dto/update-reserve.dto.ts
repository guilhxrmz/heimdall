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
  @IsString()
  readonly start_time?: string;

  @IsOptional()
  @IsString()
  readonly end_time?: string;
}
