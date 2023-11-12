import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  institution_id?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  adm_id?: string;
}
