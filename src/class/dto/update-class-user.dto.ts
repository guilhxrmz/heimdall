import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from './create-class.dto';
import { CreateClassUserDto } from './create-class-user.dto';
import { IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateClassUserDtoDto extends PartialType(CreateClassUserDto) {
  @IsString()
  userId: string;
  @IsString()
  classId: string;
}
