import { IsString } from '@nestjs/class-validator';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  teachers: User[];
}
