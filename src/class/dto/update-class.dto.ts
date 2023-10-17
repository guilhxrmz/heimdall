import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from './create-class.dto';
import { IsString } from '@nestjs/class-validator';
import { User } from '../../users/entities/user.entity';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  teachers: User[];
}
