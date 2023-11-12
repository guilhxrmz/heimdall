import { PartialType } from '@nestjs/mapped-types';
import { CreateClassUserDto } from './create-class-user.dto';
import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClassUserDto extends PartialType(CreateClassUserDto) {
  @IsString()
  @ApiProperty()
  userId: string;
  @IsString()
  @ApiProperty()
  classId: string;
}
